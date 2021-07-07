import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_URL || 'https://podcast-teste-348xftzwm-rafaelpdemelo.vercel.app',
})
