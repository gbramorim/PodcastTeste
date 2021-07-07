import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_URL || 'podcast-gazetacast-ian.vercel.app',
})
