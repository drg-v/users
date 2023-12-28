import axios from 'axios'

const BASE_URL = "http://localhost:8000/api/v1"

const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${BASE_URL}/users/${userId}`)
  return response.data
}

export default deleteUser