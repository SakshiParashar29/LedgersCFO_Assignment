const Client = require('../Model/client_model');
const clients = require('../data/client');

const getAllClients = async (req, res) => {
    try {
        const allClients = await Client.find({});

        if(allClients.length === 0){
            res.status(404).json({
                success: false,
                message: "No clients found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Clients fetched successfully",
            clients: allClients
        });
    } catch (error) {
        console.log("Error in client controlller -> ", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
};

const addClients = async(req, res) => {
    try {
        await Client.insertMany(clients);

        res.status(201).json({
            success: true, 
            message: "Clients added successfully"
        })
    } catch (error) {
        console.log("Error in client controlller -> ", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

module.exports = {getAllClients, addClients}