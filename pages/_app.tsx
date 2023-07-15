import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as ga from '../lib'
import { QueryClient, QueryClientProvider } from 'react-query'
const configs = {
  defaultOptions: {
    queries: {
      staleTime: 5,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
};
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient(configs);
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return   (<QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>)
}

export default MyApp
