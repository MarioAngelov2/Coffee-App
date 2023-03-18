import * as requester from '../services/requester'

const baseUrl = "http://localhost:3030/data/coffees";

export const getAll = async () => {
 return requester.get(baseUrl)
}