const Client = require('../Model/client_model');
const Task = require('../Model/task_model');

const createTask = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error in create task controlller -> ", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
};

const getTasks = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error in getTasks  controlller -> ", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
};

const updateTask = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error in updateTask controlller -> ", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
};

module.exports = {createTask, getTasks, updateTask}
