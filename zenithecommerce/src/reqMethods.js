import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzkwNTI1M2JkMzMyOTcxNjRmZGE2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMjM4MDUzNSwiZXhwIjoxNzMyNjM5NzM1fQ.gpBMT1gluBNqKIlZTheHO2_ZzorsIacS6trUwrSZ0Xs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
