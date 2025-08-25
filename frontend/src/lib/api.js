import axios from "axios";

const API = axios.create({
  baseURL:  "https://educhain-pedagogy.onrender.com", // FastAPI backend
});

export const getPedagogies = async () => {
  const res = await API.get("/available-pedagogies");
  return res.data;
};

export const generateContent = async (topic, pedagogy, params) => {
  const res = await API.post("/generate-content", { topic, pedagogy, params });
  return res.data;
};
