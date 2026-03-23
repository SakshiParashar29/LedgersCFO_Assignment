import { useState } from "react";
import ClientList from "../components/ClientList";
import TaskList from "../components/TaskList";

function App() {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Left Sidebar - Client List */}
      <div className="w-1/4 border-r border-gray-200 overflow-y-auto bg-white">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">LedgersCFO</h1>
          <p className="text-xs text-gray-400">Compliance Task Manager</p>
        </div>
        <ClientList
          onSelectClient={setSelectedClient}
          selectedClient={selectedClient}
        />
      </div>

      {/* Right Main Area - Task List */}
      <div className="w-3/4 overflow-y-auto">
        {selectedClient ? (
          <TaskList selectedClient={selectedClient} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <p className="text-5xl mb-4">📋</p>
            <p className="text-xl font-medium text-gray-500">Welcome to LedgersCFO</p>
            <p className="text-sm mt-1">Select a client from the left to view their tasks</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;