import axios from "axios"
import { User } from "../modules/users/User"

const BASE_URL = "http://localhost:8000/api/v1"

const getUsers = async (page: number): Promise<User[]> => {
  const response = await axios.get(`${BASE_URL}/users?page=${page}&page_size=10`)
  return response.data.users
}

export default getUsers