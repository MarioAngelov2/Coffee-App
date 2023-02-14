import * as request from "../services/requester";

const baseUrl = "http://localhost:3030";

export const login = (username, password) => {
  request.post(`${baseUrl}/users/login`, { username, password });
};
