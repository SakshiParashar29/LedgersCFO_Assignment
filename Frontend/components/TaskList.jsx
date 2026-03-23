import { useState, useEffect } from "react";
import { getTasks, updateTask } from "../services/api";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import TaskFilters from "./TaskFilters";

const TaskList = ({ selectedClient }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: "All",
    category: "All",
  });

  useEffect(() => {
    if (selectedClient) {
      fetchTasks();
    }
  }, [selectedClient]);

  useEffect(() => {
    applyFilters();
  }, [tasks, filters]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getTasks(selectedClient._id);
      setTasks(response.data.tasks);
    } catch (error) {
      if (error.response?.status === 404) {
        setTasks([]);
      } else {
        setError("Failed to fetch tasks");
      }
      console.log("Error fetching tasks -> ", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...tasks];

    if (filters.status !== "All") {
      filtered = filtered.filter((task) => task.status === filters.status);
    }

    if (filters.category !== "All") {
      filtered = filtered.filter((task) => task.category === filters.category);
    }

    setFilteredTasks(filtered);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try {
      await updateTask(taskId, updatedData);
      fetchTasks();
    } catch (error) {
      console.log("Error updating task -> ", error);
    }
  };

  if (loading) return <p className="p-6">Loading tasks...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-1">{selectedClient.company_name}</h2>
      <p className="text-gray-500 text-sm mb-6">
        {selectedClient.entity_type} • {selectedClient.country}
      </p>

      {/* Summary Stats */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
          Total: {tasks.length}
        </span>
        <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
          Pending: {tasks.filter((t) => t.status === "Pending").length}
        </span>
        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          In Progress: {tasks.filter((t) => t.status === "In Progress").length}
        </span>
        <span className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full">
          Overdue:{" "}
          {
            tasks.filter(
              (t) =>
                new Date(t.due_date) < new Date() && t.status !== "Completed"
            ).length
          }
        </span>
        <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
          Completed: {tasks.filter((t) => t.status === "Completed").length}
        </span>
      </div>

      {/* Filters */}
      <TaskFilters onFilter={handleFilter} filters={filters} />

      {/* Task Cards */}
      <div className="mt-4">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-400 text-center py-8">
            No tasks found. Add a new task below!
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onUpdateTask={handleUpdateTask}
            />
          ))
        )}
      </div>

      {/* Add Task Form */}
      <TaskForm selectedClient={selectedClient} onTaskAdded={fetchTasks} />
    </div>
  );
};

export default TaskList;