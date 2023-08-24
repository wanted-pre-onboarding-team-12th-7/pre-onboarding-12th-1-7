import axios from 'axios'

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/'

export const Instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

Instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken')

  if (token != null) config.headers.Authorization = `Bearer ${token}`

  return config
})
