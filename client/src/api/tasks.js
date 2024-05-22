import axios from "./aixos";

export const getTasksRequest = () => axios.get("/tasks");
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);
export const createTaskRequest = (tasks) => axios.post("/tasks", tasks);
export const updateTaskRequest = (id, task) =>
  axios.put(`/tasks/${id}`, task);
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
