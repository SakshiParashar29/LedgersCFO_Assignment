import { useState, useEffect } from "react";
import { getClients } from "../services/api";
import { MdBusiness, MdLocationOn, MdCategory } from "react-icons/md";

const ClientList = ({ onSelectClient, selectedClient }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const response = await getClients();
      setClients(response.data.clients);
    } catch (error) {
      setError("Failed to fetch clients");
      console.log("Error fetching clients -> ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading clients...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Clients</h2>

      {clients.map((client) => (
        <div
          key={client._id}
          onClick={() => onSelectClient(client)}
          className={`p-3 mb-2 rounded cursor-pointer border 
            ${selectedClient?._id === client._id
              ? "bg-orange-300 text-white"
              : "bg-white hover:bg-blue-50"
            }`}
        >
          <div className="flex items-center gap-1 font-semibold text-blue-600 mb-1">
            <MdBusiness /> {client.company_name}
          </div>
          <div className="flex items-center gap-1 text-sm text-red-500 mb-1">
            <MdLocationOn /> {client.country}
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <MdCategory /> {client.entity_type}
          </div>
        </div>
      ))}
    </div>
  );
};


export default ClientList;