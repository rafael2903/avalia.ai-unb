import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})


export const fetcher = ({ url, params }) => api.get(url, {
  params: {
    pageSize: 4,
    ...params
  }
}).then(res => res.data)
