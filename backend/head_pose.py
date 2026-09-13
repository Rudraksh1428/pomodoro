
import cv2
import mediapipe as mp
import numpy as np

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
    output_facial_transformation_matrixes=True,
)

detector = vision.FaceLandmarker.create_from_options(options)

camera = cv2.VideoCapture(0)

if not camera.isOpened():
    print("Error: Could not access webcam.")
    exit()

print("Head pose detection started.")
print("Press Q to quit.")

while True:
    success, frame = camera.read()

    if not success:
        print("Could not read camera frame.")
        break

    frame = cv2.flip(frame, 1)

    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    mp_image = mp.Image(
        image_format=mp.ImageFormat.SRGB,
        data=rgb_frame
    )

    result = detector.detect(mp_image)

    if result.face_landmarks:
        landmarks = result.face_landmarks[0]
        h, w, _ = frame.shape

        important_points = [
            1,
            33,
            263,
            61,
            291,
            199
        ]

        for index in important_points:
            landmark = landmarks[index]

            x = int(landmark.x * w)
            y = int(landmark.y * h)

            cv2.circle(
                frame,
                (x, y),
                5,
                (0, 255, 0),
                -1
            )

        if result.facial_transformation_matrixes:
            matrix = np.array(
                result.facial_transformation_matrixes[0]
            )

            rotation_matrix = matrix[:3, :3]

            sy = np.sqrt(
                rotation_matrix[0, 0] ** 2
                + rotation_matrix[1, 0] ** 2
            )

            singular = sy < 1e-6

            if not singular:
                x_angle = np.arctan2(
                    rotation_matrix[2, 1],
                    rotation_matrix[2, 2]
                )

                y_angle = np.arctan2(
                    -rotation_matrix[2, 0],
                    sy
                )

                z_angle = np.arctan2(
                    rotation_matrix[1, 0],
                    rotation_matrix[0, 0]
                )

            else:
                x_angle = np.arctan2(
                    -rotation_matrix[1, 2],
                    rotation_matrix[1, 1]
                )

                y_angle = np.arctan2(
                    -rotation_matrix[2, 0],
                    sy
                )

                z_angle = 0

            pitch = np.degrees(x_angle)
            yaw = np.degrees(y_angle)
            roll = np.degrees(z_angle)

            if pitch > 15:
                status = "LOOKING DOWN"
                status_color = (0, 0, 255)

            elif pitch < -15:
                status = "LOOKING UP"
                status_color = (255, 0, 0)

            elif abs(yaw) > 20:
                status = "LOOKING AWAY"
                status_color = (0, 165, 255)

            else:
                status = "FOCUSED"
                status_color = (0, 255, 0)

            cv2.putText(
                frame,
                status,
                (30, 50),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                status_color,
                2
            )

            cv2.putText(
                frame,
                f"Pitch: {pitch:.1f}",
                (30, 90),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.7,
                (255, 255, 255),
                2
            )

            cv2.putText(
                frame,
                f"Yaw: {yaw:.1f}",
                (30, 120),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.7,
                (255, 255, 255),
                2
            )

            cv2.putText(
                frame,
                f"Roll: {roll:.1f}",
                (30, 150),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.7,
                (255, 255, 255),
                2
            )

    else:
        cv2.putText(
            frame,
            "NO FACE DETECTED",
            (30, 50),
            cv2.FONT_HERSHEY_SIMPLEX,
            1,
            (0, 0, 255),
            2
        )

    cv2.imshow(
        "Smart Study Assistant - Head Pose",
        frame
    )

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

camera.release()
detector.close()
cv2.destroyAllWindows()
