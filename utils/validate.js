import { removeFromArr } from '@/utils/utils'

/**
 * Created by Amaisoft.
 */

export function addFieldValidate(ref, ruleFormRef, lstFieldError) {
  ruleFormRef.validateField(ref, (valid) => {
    if (!valid) {
      lstFieldError.push(ref)
    } else {
      lstFieldError = removeFromArr(lstFieldError, ref)
    }
  })
}

export async function checkFieldValidate(ref, ruleFormRef, status) {
  if(Object.entries(ruleFormRef).length !== 0) {
    ruleFormRef.validateField(ref, async (valid) => {
      status.valid = valid
      return valid
    })
    return status
  }
}

export function resetValidateField(ref, ruleFormRef) {
  if(Object.entries(ruleFormRef).length !== 0) {
    ruleFormRef.clearValidate(ref)
  }
}


/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export function validPassword(str) {
  const reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\*\.\!\@\$\%\^\&\(\)\{\}\[\]\:\;\<\>\,\.\?\/\~\_\+\-\=\|\\]).{8,32}$/
  return reg.test(str)
}

export function validPhone(str) {
  const reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
  return reg.test(str)
}

export function validPhoneNoPrefix(str) {
  const reg = /^([0-9]{9,12})$\b/
  return reg.test(str)
}

export function checkDate(str, day = 0) {
  if (str) {
    return new Date(str).getDate() < new Date().setDate(new Date().getDate() + day)
  }
}

export const validateNumber = (rule, value, cb) => {
  const regex = /^[0-9]+$/
  if(!regex.test(value)) {
    cb(new Error())
  }else{
    cb()
  }
}
