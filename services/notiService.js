import { TYPE_ERROR, TYPE_INFO, TYPE_SUCCESS, TYPE_WARRING } from '@/constants'
import { trans } from "~/utils/language.js";
export function setNotifySuccess(message) {
  ElNotification({
    title: trans('Success'),
    message: message,
    type: TYPE_SUCCESS,
  })
}

export function setNotifyError(message) {
  ElNotification({
    title: trans('Error'),
    message: message,
    type: TYPE_ERROR,
  })
}

export function setNotifyInfo(message) {
  ElNotification({
    title: trans('Info'),
    message: message,
    type: TYPE_INFO,
  })
}

export function setNotifyWarning(message) {
  ElNotification({
    title: trans('Warning'),
    message: message,
    type: TYPE_WARRING,
  })
}
