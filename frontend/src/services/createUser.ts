import axios from 'axios'
import { User } from '../modules/users/User'

const BASE_URL = "http://localhost:8000/api/v1"

const createUser = async (user: User) => {
  const response = await axios.post(`${BASE_URL}/users`, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.data
}

export default createUser