import { useCustomFetch } from "~/composables/useCustomFetch.ts";
export function login(data) {
    return useCustomFetch('/auth/login',
        {
            method: 'post',
            body: data,
        },
        true)
}


