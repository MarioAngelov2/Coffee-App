import * as requester from '../services/requester'

const baseUrl = "http://localhost:3030/jsonstore";

export const getAll = async () => {
 return requester.get(`${baseUrl}/catalog`)
}