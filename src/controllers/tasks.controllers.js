import Task from "../models/tasks.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.decode.id,
    }).populate("user");

    if (!tasks)
      return res.status(200).json({ message: "You have not added any tasks." });
    res.json(tasks);
  } catch (e) {
    res.status(500).json({ message: "Error:" + e });
  }
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.decode.id,
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    console.log(task)
    if (!task) return res.status(404).json({ message: "Task not found." });
    res.json(task);
  } catch (e) {
    res.status(404).json({ message: "Task not found: " + e });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found." });
    res.sendStatus(204);
  } catch (e) {
    res.status(404).json({ message: "Task not found: " + e });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "Task not found." });
    res.json(task);
  } catch (e) {
    res.status(404).json({ message: "Task not found: " + e });
  }
};
