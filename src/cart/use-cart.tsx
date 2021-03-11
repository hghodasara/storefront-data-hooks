import type {
  FetcherOptions,
  HookFetcher,
  HookFetcherOptions,
} from '.././commerce/utils/types'
import type { SwrOptions } from '.././commerce/utils/use-data'
import useCommerceCart, { CartInput } from '.././commerce/cart/use-cart'
import type { Cart } from '../api/cart'
import { defaultUrl } from './var'

const defaultOpts = {
  url: defaultUrl.url,
  method: 'GET',
}

export type { Cart }

export const fetcher: HookFetcher<Cart | null, CartInput> = (
  options,
  { cartId },
  fetch
) => {
  return cartId ? fetch({ ...defaultOpts, ...options }) : null
}

export function extendHook(
  customFetcher: typeof fetcher,
  swrOptions?: SwrOptions<Cart | null, CartInput>
) {
  const useCart = (params?: { options: HookFetcherOptions }) => {
    const options = params?.options || defaultOpts
    const response = useCommerceCart(options, [], customFetcher, {
      revalidateOnFocus: false,
      ...swrOptions,
    })

    // Uses a getter to only calculate the prop when required
    // response.data is also a getter and it's better to not trigger it early
    Object.defineProperty(response, 'isEmpty', {
      get() {
        return Object.values(response.data?.line_items ?? {}).every(
          (items) => !items.length
        )
      },
      set: (x) => x,
    })

    return response
  }

  useCart.extend = extendHook

  return useCart
}

export default extendHook(fetcher)
