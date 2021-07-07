import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_URL || 'https://backst4gestudio.com.br'
})
