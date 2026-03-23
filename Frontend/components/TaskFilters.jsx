const TaskFilters = ({ onFilter, filters }) => {
  const handleChange = (e) => {
    onFilter({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {/* Status Filter */}
      <div>
        <label className="block text-xs text-gray-500 mb-1">Status</label>
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="border rounded px-3 py-2 text-sm bg-white"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-xs text-gray-500 mb-1">Category</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="border rounded px-3 py-2 text-sm bg-white"
        >
          <option value="All">All Categories</option>
          <option value="GST">GST</option>
          <option value="Tax">Tax</option>
          <option value="Audit">Audit</option>
          <option value="Filing">Filing</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilters;