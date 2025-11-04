// src/app/config/api.js

// Define automaticamente a URL base da API
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default API_BASE_URL;
