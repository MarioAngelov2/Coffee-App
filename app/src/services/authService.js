import * as request from "../services/requester";

const baseUrl = "http://localhost:3030";

export const login = (email, password) => {
  return request.post(`${baseUrl}/users/login`, { email, password });
};
