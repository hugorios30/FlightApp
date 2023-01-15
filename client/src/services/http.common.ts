import axios from "axios";

export const DB_API = axios.create({
  baseURL: 'http://localhost:5000' + "/api",
  headers: {
    "Content-type": "application/json"
  }
});

export const FLIGHT_API = axios.create({
    baseURL: 'http://localhost:5000' + "/api/v1",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
    }
  });