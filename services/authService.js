// import Cookies from 'js-cookie'
// import { login } from '@/api/auth'
// import userStore from '@/store/user'
//
// const TokenKey = 'access_token'
// const RolesKey = 'roles'
// const Email = 'email_login'
//
// export function getToken() {
//   return Cookies.get(TokenKey)
// }
//
// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }
//
// export function setRoles(roles) {
//   return Cookies.set(RolesKey, roles)
// }
//
// export function getRoles() {
//   return Cookies.get(RolesKey)
// }
//
// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }
//
// export function getEmail() {
//   return Cookies.get(Email)
// }
//
// export function setEmail(email) {
//   return Cookies.set(Email, email)
// }
//
// export function removeEmail() {
//   return Cookies.remove(Email)
// }
//
// export async function handleLogin(data) {
//   const response = await login(data)
//   if (response.status_code === 200) {
//     setToken(response.data.access_token)
//     await userStore().M_roles(response.data.roles)
//   }
//   return response
// }
//
//
//
//
