import { useMutation, useQueryClient } from '@tanstack/react-query'
import deleteUser from '../../../services/deleteUser'
import toast from 'react-hot-toast'

const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      toast.success(`User has been deleted`);
    },
  })
}

export default useDeleteUser