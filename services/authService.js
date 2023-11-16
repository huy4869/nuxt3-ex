// import Cookies from 'js-cookie'
import { login } from '~/api/auth'

export async function handleLogin(data) {
  const response = await login(data)
  // if (response.status_code === 200) {
  // }
  return response
}
