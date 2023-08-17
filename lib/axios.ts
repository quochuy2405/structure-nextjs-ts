import axios from 'axios'

const BASE_URL = 'https://6382adbd1ada9475c8f1636c.mockapi.io'

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})
