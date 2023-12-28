import axios from 'axios'
import { User } from '../modules/users/User'

const BASE_URL = "http://localhost:8000/api/v1"

const updateUser = async (user: User) => {
  const response = await axios.patch(`${BASE_URL}/users/${user.id}`, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.data
}

export default updateUser