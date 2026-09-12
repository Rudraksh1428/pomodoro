const Sessioncount = ({ completedSessions }) => {
  const currentCycle = (completedSessions % 4) + 1;

  return (
    <div className="mt-7 text-center">
      <p className="text-lg font-bold text-[#4d4143]">
        {completedSessions} sessions completed
      </p>

      <p className="mt-1 text-sm text-[#75676a]">
        Current cycle: {currentCycle} / 4
      </p>

      <p className="mt-1 text-sm text-[#75676a]">
        Long break after every 4 work sessions
      </p>
    </div>
  );
};

export default Sessioncount;