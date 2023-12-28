import { useQuery } from "@tanstack/react-query"
import getUsers from "../../../services/getUsers"

const useUsers = (page: number) => {
  const {data} = useQuery({ queryKey: ['users', page], queryFn: () => getUsers(page) })
  return {users: data}
}

export default useUsers