const Task = require('../Model/task_model');

const createTask = async (req, res) => {
    try {
        const { title, description, category, due_date, priority } = req.body;

        if (!title || !description || !category || !due_date || !priority) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const newTask = new Task(req.body);

        await newTask.save();

        res.status(201).json({
            success: true,
            message: "New task added successfully",
            newTask: newTask
        });

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
        const clientId = req.params.clientId

        const clientTasks = await Task.find({ client_id: clientId });

        if (clientTasks.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No tasks found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Tasks found successfully",
            tasks: clientTasks
        });
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
        const taskId = req.params.id;

        const task = await Task.findById(taskId);

        if (task.length == 0) {
            return res.status(404).json({
                success: false,
                message: "No tasks found"
            });
        }

        const { title, description, category, due_date, priority, status } = req.body;

        if (title) task.title = title;
        if (description) task.description = description;
        if (category) task.category = category;
        if (due_date) task.due_date = due_date;
        if (priority) task.priority = priority;
        if (status) task.status = status;

        await task.save();

        return res.status(200).json({
            success: true,
            message: "Tasks updated successfully",
            updatedTask: task
        });
    } catch (error) {
        console.log("Error in updateTask controlller -> ", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
};

module.exports = { createTask, getTasks, updateTask }
