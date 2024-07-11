import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
   const tasks = await Task.find({
    user: req.user.id
   }).populate('user')
   res.json(tasks)
};

export const createTask = async (req, res) => {
    const {title, description, date} = req.body ;
    console.log(req.user)
    const newTask = new Task ({
    title,
    description, 
    date,   
    user: req.user.id
    })

    const savedTask = await newTask.save() 
    res.json(savedTask);
};


export const getTask = (req, res) => {
    res.json({ message: "Get task by id" });
};

export const updateTask = (req, res) => {
    res.json({ message: "Update task" });
};

export const deleteTask = (req, res) => {
    res.json({ message: "Delete task" });
};
