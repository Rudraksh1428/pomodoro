const TaskItem = ({
  task,
  isSelected,
  onSelect,
  onToggle,
  onDelete,
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl border p-4 transition ${
        isSelected
          ? "border-[#ad4058] bg-[#fdf0f3]"
          : "border-[#eadfdd] bg-[#faf7f5]"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 accent-[#ad4058]"
        />

        <button
          type="button"
          onClick={() => onSelect(task.id)}
          className={`truncate text-left font-semibold ${
            task.completed
              ? "text-[#aaa] line-through"
              : "text-[#403638]"
          }`}
        >
          {task.name}
        </button>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <span className="rounded-lg bg-[#f1d8de] px-3 py-1 text-xs font-bold text-[#96384f]">
          {task.pomodoros} 🍅
        </span>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="rounded-lg px-2 py-1 text-sm font-bold text-[#ad4058] hover:bg-[#f4dce1]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;