import axios from 'axios'

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/'

export const NoAuthInstance = axios.create({ 
  baseURL: BASE_URL, 
  headers: { "Content-Type": "application/json" } 
})

export const AuthInstance = axios.create({
  baseURL: BASE_URL, 
  headers: { 
    "Content-Type": "application/json", 
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
})