import { trpcClient } from 'src/tRPC/client'
import { enhanceApi } from 'trpc-rtk-query'
import { api } from './main'

// const tagTypes = ['User']

const enhancedAPI = enhanceApi({
  client: trpcClient,
  api: api
})

export { enhancedAPI } // Automatically typed hooks thanks to the power of tRPC + RTK!
