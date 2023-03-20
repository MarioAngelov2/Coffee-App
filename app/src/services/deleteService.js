import * as requester from '../services/requester'

const baseUrl = "http://localhost:3030/data/coffees";

export const deleteItem = (id) => {
 return requester.del(`${baseUrl}/${id}`, id)
}