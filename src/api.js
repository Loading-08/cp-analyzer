import axios from "axios";
const BASE = "https://cp-analyzer-backend-gabe.onrender.com";
export const analyzeUser = (handle) => axios.get(`${BASE}/analyze/${handle}`).then((r) => r.data);
