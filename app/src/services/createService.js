import * as requester from '../services/requester';

const baseUrl = "http://localhost:3030/data/coffees";

export const createCoffeeService = (productData) => {
  return requester.post(baseUrl, productData)
}