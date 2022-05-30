import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2QyZDU0NTk0OWNlZmU5OTY3NzQ2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzg4OTY2NCwiZXhwIjoxNjU0MTQ4ODY0fQ.0bvZnBxKsgPh9YmLwU-q933t18bsfCX0v3VCgk3oAoc";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
