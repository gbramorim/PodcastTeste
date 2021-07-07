import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_URL || 'https://gitlab.com/api/v4/feature_flags/unleash/27955264'
})
