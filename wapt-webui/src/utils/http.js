import axios from 'axios'

// This instance will be used for all requests to API
export const HTTP = axios.create({
  // Get base URL from app configuration
  baseURL: process.env.API_URL,
  headers: {
    // Basic auth header
    Authorization: 'Basic YWRtaW46d2FwdHBhc3N3b3Jk'
  }
})
