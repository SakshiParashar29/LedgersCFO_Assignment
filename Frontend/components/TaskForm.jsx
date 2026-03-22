import { useState } from "react";
import { createTask } from "../services/api";

const TaskForm = ({ selectedClient, onTaskAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    due_date: "",
    priority: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await createTask({ ...form, client_id: selectedClient._id });
      onTaskAdded();
      setForm({
        title: "",
        description: "",
        category: "",
        due_date: "",
        priority: "",
      });
      setIsOpen(false);
    } catch (error) {
      setError("Failed to add task. Please try again.");
      console.log("Error creating task -> ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isOpen ? "Cancel" : "+ Add New Task"}
      </button>

      {/* Form */}
      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-white p-4 rounded border"
        >
          <h3 className="font-bold text-lg mb-4">Add New Task</h3>

          {/* Title */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Enter task title"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Enter task description"
              rows={3}
            />
          </div>

          {/* Category and Priority */}
          <div className="flex gap-4 mb-3">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option value="">-- Select Category --</option>
                <option value="GST">GST</option>
                <option value="Tax">Tax</option>
                <option value="Audit">Audit</option>
                <option value="Filing">Filing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Priority
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option value="">-- Select Priority --</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Due Date</label>
            <input
              type="date"
              name="due_date"
              value={form.due_date}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Task"}
          </button>
        </form>
      )}
    </div>
  );
};

export default TaskForm;