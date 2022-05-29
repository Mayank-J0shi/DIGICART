import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2QyZDU0NTk0OWNlZmU5OTY3NzQ2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzgxMDIzOCwiZXhwIjoxNjU0MDY5NDM4fQ.MXmGuzOuVDnV9YKcNuzPV36eR8tNsNmGJWnuTQ1hgOw";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
