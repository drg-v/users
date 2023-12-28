import { useMutation, useQueryClient } from '@tanstack/react-query'
import createUser from '../../../services/createUser'
import toast from 'react-hot-toast'

const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      toast.success(`User has been created`);
    },
  })
}

export default useCreateUser

