import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://kadynn-api.vercel.app/',
})
