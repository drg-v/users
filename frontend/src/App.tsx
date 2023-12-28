import { Toaster } from 'react-hot-toast';
import AppLayout from './layout';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users from './pages/Users';

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppLayout>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Users />
    </AppLayout>
  </QueryClientProvider>
);

export default App;
