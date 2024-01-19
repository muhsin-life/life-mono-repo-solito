import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeArea } from './safe-area'
import { Layout } from 'app/components/Layout';

export function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
  <SafeArea>
    {children}
    </SafeArea>

  </QueryClientProvider>
  )
}
