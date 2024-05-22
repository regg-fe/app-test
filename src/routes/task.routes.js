import { Router } from "express";
import { authRequire } from "../middlewares/validateTokens.js";
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.js";
const router = Router();
router.get("/tasks", authRequire, getTasks);
router.post("/tasks", authRequire, createTask);
router.get('/tasks/:id', authRequire, getTask);
router.delete("/tasks/:id", authRequire, deleteTask);
router.put("/tasks/:id", authRequire, updateTask);

export default router;
