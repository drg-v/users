import { useMutation, useQueryClient } from '@tanstack/react-query'
import updateUser from '../../../services/updateUser'
import toast from 'react-hot-toast'

const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      toast.success(`User has been updated`);
    },
  })
}

export default useUpdateUser