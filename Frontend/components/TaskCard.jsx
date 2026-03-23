import { MdInsertDriveFile, MdCalendarToday, MdPriorityHigh } from "react-icons/md";

const TaskCard = ({ task, onUpdateTask }) => {
  if (!task) return null;

  const isOverdue =
    new Date(task.due_date) < new Date() && task.status !== "Completed";

  const handleStatusChange = (e) => {
    onUpdateTask(task._id, { status: e.target.value });
  };

  return (
    <div
      className={`p-4 mb-3 rounded-lg border ${
        isOverdue
          ? "bg-red-50 border-red-400"
          : task.status === "Completed"
          ? "bg-green-50 border-green-400"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <div className="flex gap-2">
          {isOverdue && (
            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
              OVERDUE
            </span>
          )}
          {task.status === "Completed" && (
            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
              COMPLETED
            </span>
          )}
          {task.priority === "High" && !isOverdue && task.status !== "Completed" && (
            <span className="text-xs bg-orange-400 text-white px-2 py-1 rounded">
              HIGH
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">{task.description}</p>

      {/* Details Row */}
      <div className="flex gap-4 text-sm text-gray-500 mb-3">
        <span className="flex items-center gap-1">
          <MdInsertDriveFile /> {task.category}
        </span>
        <span className="flex items-center gap-1">
          <MdCalendarToday /> {new Date(task.due_date).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1">
          <MdPriorityHigh /> {task.priority}
        </span>
      </div>

      {/* Status Dropdown */}
      <select
        value={task.status}
        onChange={handleStatusChange}
        className={`text-sm border rounded px-2 py-1 ${
          isOverdue ? "bg-red-50" : "bg-white"
        }`}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskCard;