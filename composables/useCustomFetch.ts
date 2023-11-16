import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import {setNotifyError, setNotifySuccess} from "~/services/notiService";

class myBusinessResponse {
    constructor(_data: any, isAlertMessage: boolean) {
        // const statusCode = _data.code
            // if (isAlertMessage && statusCode === 0) {
            //     setNotifySuccess(_data.message)
            // }
            // if (statusCode === 1) {
            //     setNotifyError(_data.message)
            // }
        return _data
    }
}

// @ts-ignore
class myBusinessError implements Error {
    constructor(res: any, isAlertMessage: boolean) {
        console.log(res)
        const statusCode = res.status
        if (statusCode === 401) {
            setNotifyError(res.statusText)
        }
    }
}

export function useCustomFetch<T> (url: string | (() => string), options: UseFetchOptions<T> = {}, isAlertMessage: boolean) {
    const userAuth = useCookie('token')
    const config = useRuntimeConfig()

    const defaults: UseFetchOptions<T> = {
        baseURL: config.public.baseUrl ?? 'https://api.nuxtjs.dev',
        // this overrides the default key generation, which includes a hash of
        // url, method, headers, etc. - this should be used with care as the key
        // is how Nuxt decides how responses should be deduplicated between
        // client and server
        key: url,

        // set user token if connected
        headers: userAuth.value
            ? { Authorization: `Bearer ${userAuth.value}` }
            : {},

        onResponse (_ctx) {
            _ctx.response._data = new myBusinessResponse(_ctx.response._data, isAlertMessage)
        },

        onResponseError (_ctx) {
            throw new myBusinessError(_ctx.response, isAlertMessage)
            console.log(_ctx)
        },
        onRequestError(_ctx) {

        }
    }

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults)

    return useFetch(url, params)
}
