import axios from 'axios'

const Client = axios.create({ baseURL: 'http://localhost:8000/api' })

export default Client