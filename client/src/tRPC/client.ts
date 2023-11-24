import { createTRPCProxyClient, httpLink } from '@trpc/client'

// @ts-ignore
import { AppRouter } from '../../../server/src/trpc/root'

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      // server URL
      url: 'http://localhost:8080'

      // async headers() {
      //   return {
      //     // authorization: getAuthCookie()
      //   }
      // }
    })
  ]
})
