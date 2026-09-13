
import cv2
import mediapipe as mp
import numpy as np
import time

from mediapipe.tasks import python
from mediapipe.tasks.python import vision

base_options = python.BaseOptions(
    model_asset_path="models/face_landmarker.task"
)

options = vision.FaceLandmarkerOptions(
    base_options=base_options,
    num_faces=1,
    min_face_detection_confidence=0.5,
    min_face_presence_confidence=0.5,
    min_tracking_confidence=0.5,
    output_face_blendshapes=False,
    output_facial_transformation_matrixes=False,
)

detector = vision.FaceLandmarker.create_from_options(options)

LEFT_EYE = [362, 385, 387, 263, 373, 380]
RIGHT_EYE = [33, 160, 158, 133, 153, 144]

EAR_THRESHOLD = 0.18
CLOSED_TIME_THRESHOLD = 1.5

eyes_closed_start = None
was_closed = False


def calculate_ear(landmarks, eye_indices, width, height):
    points = []

    for index in eye_indices:
        landmark = landmarks[index]

        x = landmark.x * width
        y = landmark.y * height

        points.append(np.array([x, y]))

    p1, p2, p3, p4, p5, p6 = points

    vertical_1 = np.linalg.norm(p2 - p6)
    vertical_2 = np.linalg.norm(p3 - p5)

    horizontal = np.linalg.norm(p1 - p4)

    if horizontal == 0:
        return 0

    return (vertical_1 + vertical_2) / (2.0 * horizontal)


camera = cv2.VideoCapture(0)

if not camera.isOpened():
    print("Error: Could not access webcam.")
    exit()

print("Eye detection started.")
print("Press Q to quit.")

while True:

    success, frame = camera.read()

    if not success:
        print("Could not read camera frame.")
        break

    frame = cv2.flip(frame, 1)

    height, width, _ = frame.shape

    rgb_frame = cv2.cvtColor(
        frame,
        cv2.COLOR_BGR2RGB
    )

    mp_image = mp.Image(
        image_format=mp.ImageFormat.SRGB,
        data=rgb_frame
    )

    result = detector.detect(mp_image)

    if result.face_landmarks:

        landmarks = result.face_landmarks[0]

        left_ear = calculate_ear(
            landmarks,
            LEFT_EYE,
            width,
            height
        )

        right_ear = calculate_ear(
            landmarks,
            RIGHT_EYE,
            width,
            height
        )

        average_ear = (left_ear + right_ear) / 2

        current_time = time.time()

        if average_ear < EAR_THRESHOLD:

            if not was_closed:
                eyes_closed_start = current_time
                was_closed = True

            closed_duration = current_time - eyes_closed_start

        else:

            closed_duration = 0
            eyes_closed_start = None
            was_closed = False

        if closed_duration >= CLOSED_TIME_THRESHOLD:

            eye_state = "PROLONGED EYE CLOSURE"
            text_color = (0, 0, 255)

        elif was_closed:

            eye_state = "BLINK"
            text_color = (0, 255, 255)

        else:

            eye_state = "EYES OPEN"
            text_color = (0, 255, 0)

        for index in LEFT_EYE + RIGHT_EYE:

            landmark = landmarks[index]

            x = int(landmark.x * width)
            y = int(landmark.y * height)

            cv2.circle(
                frame,
                (x, y),
                3,
                (255, 255, 0),
                -1
            )

        cv2.putText(
            frame,
            eye_state,
            (30, 50),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.8,
            text_color,
            2
        )

        cv2.putText(
            frame,
            f"EAR: {average_ear:.3f}",
            (30, 90),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.7,
            (255, 255, 255),
            2
        )

        cv2.putText(
            frame,
            f"Closed: {closed_duration:.2f}s",
            (30, 125),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.7,
            (255, 255, 255),
            2
        )

    else:

        eyes_closed_start = None
        was_closed = False

        cv2.putText(
            frame,
            "NO FACE DETECTED",
            (30, 50),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.8,
            (0, 0, 255),
            2
        )

    cv2.imshow(
        "Smart Study Assistant - Eye Detection",
        frame
    )

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

camera.release()
detector.close()
cv2.destroyAllWindows()
