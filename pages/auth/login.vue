<template>
    <div class="auth-page">
        <FormAuth v-if="page === 'login'" :title="$t('login.logIn')">
            <template #form-component>
                <el-form
                    ref='ruleFormRef'
                    :model='loginForm'
                    :rules='loginRules'
                    autocomplete='on'
                    :validate-on-rule-change="false"
                    label-position='left'
                >
                    <BaseInputText
                        ref="email"
                        v-model:model="loginForm.email"
                        :model="loginForm.email"
                        :rule-form-ref="ruleFormRef"
                        :rules="loginRules.email"
                        :name-ref="'email'"
                        maxlength="64"
                        :placeholder="$t('login.placeholder-email')"
                        :error-response="errorResponse.email"
                        :label="$t('login.email')"
                    />
                    <BaseInputPassword
                        ref="password"
                        v-model:model="loginForm.password"
                        :model="loginForm.password"
                        :rule-form-ref="ruleFormRef"
                        :rules="loginRules.password"
                        :name-ref="'password'"
                        maxlength="64"
                        :placeholder="$t('login.placeholder-password')"
                        :error-response="errorResponse.password"
                        :label="$t('login.password')"
                    />
                    <div class="flex justify-end ">
                        <BaseLink :text="$t('login.forgot-password')" class-extra="mb-6" @click="pageForgot" ></BaseLink>
                    </div>
                    <BaseButton
                        :loading='loading'
                        :is-full-width="true"
                        :text="$t('login.logIn')"
                        @submit='handleLogin(ruleFormRef)'
                    />
                </el-form>
            </template>
        </FormAuth>
<!--        <FormAuth v-if="page === 'forgot-password'" :is-title="isForgotPassword" :title="`Quên mật khẩu`">-->
<!--            <template #form-component>-->
<!--                <el-form-->
<!--                    ref='ruleForgotFormRef'-->
<!--                    :model='forgotForm'-->
<!--                    :rules='forgotFormRules'-->
<!--                    class='login-form'-->
<!--                    autocomplete='on'-->
<!--                    label-position='left'-->
<!--                >-->
<!--                    <div class='login'>-->
<!--                        <div v-if='isForgotPassword'>-->
<!--                            <BaseInputText-->
<!--                                ref="email"-->
<!--                                v-model:model="forgotForm.email"-->
<!--                                :model="forgotForm.email"-->
<!--                                :rule-form-ref="ruleForgotFormRef"-->
<!--                                :rules="forgotFormRules.email"-->
<!--                                name-ref="email"-->
<!--                                :show-label="true"-->
<!--                                :label="$t('login.email')"-->
<!--                                :placeholder=" $t('login.forgot-description-title')"-->
<!--                                :error-response="errorResponse.email"-->
<!--                                :maxlength='40'-->
<!--                            />-->
<!--                            <BaseButton-->
<!--                                :loading='loading'-->
<!--                                :is-full-width="true"-->
<!--                                :text="$t('common.confirm')"-->
<!--                                @submit='handleForgot(ruleForgotFormRef)'-->
<!--                            />-->
<!--                        </div>-->
<!--                        <div v-else class='text-center'>-->
<!--                            <p class='text-heading-03 mb-6 text-dark'>-->
<!--                                {{ $t('login.forgot-password-title') }}-->
<!--                            </p>-->
<!--                            <p class='text-body-01 text-dark'>-->
<!--                                {{ $t('login.forgot-password-content-1') }}-->
<!--                            </p>-->
<!--                            <p class='text-body-01 text-dark'>-->
<!--                                {{ $t('login.forgot-password-content-2') }}-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="flex justify-center mt-6">-->
<!--                            <BaseLink :text="$t('login.back-login')" @click="pageLogin" ></BaseLink>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </el-form>-->
<!--            </template>-->
<!--        </FormAuth>-->
    </div>
</template>

<script setup>
import * as authService from '@/services/authService'
import { resetErrorResponse } from '@/utils/validateServerError'
import { RULE_EMAIL, RULE_PASSWORD } from '@/constants/rule-form'

const page = ref('login')
const ruleFormRef = ref()
const ruleForgotFormRef = ref()
const isForgotPassword = ref(true)
const errorResponse = ref({})
const loginForm = ref({
    email: '',
    password: '',
})

const loginRules = computed(() => {
    return {
        email: RULE_EMAIL('login.email'),
        password: RULE_PASSWORD,
    }
})
const forgotForm = ref({
    email: '',
})
const forgotFormRules = computed(() => {
    return { email: RULE_EMAIL('login.email') }
})
const loading = ref(false)
watch([page], () => {
    if (page.value) {
        switch (page.value) {
            case 'login':
                loginForm.value = {
                    email: '',
                    password: '',
                    role: '',
                }
                nextTick(() => {
                    ruleFormRef.value.clearValidate()
                })
                break
            case 'forgot-password':
                forgotForm.value = {
                    email: '',
                }
                nextTick(() => {
                    ruleForgotFormRef.value.clearValidate()
                })
                break
        }
    }
})
// check page
const pageForgot = () => {
    isForgotPassword.value = true
    page.value = 'forgot-password'
}
const pageLogin = () => {
    page.value = 'login'
}

const handleLogin = (ruleFormRef) => {
    errorResponse.value = resetErrorResponse(errorResponse)
    ruleFormRef.validate(async (valid) => {
        if (valid) {
            try {
                const response = await authService.handleLogin(loginForm.value)
                if (response.status_code === 200) {
                    await router.push({ path: '/' })
                } else if (response.status_code === 422) {
                    errorResponse.value = response.error_response
                }
            } catch (response) {
                console.log(response)
            }
        } else {
            return false
        }
    })
}

const handleForgot = (ruleForgotFormRef) => {
    errorResponse.value = resetErrorResponse(errorResponse)
    ruleForgotFormRef.validate(async (valid) => {
        if (valid) {
            try {
                const response = await authService.handleForgotPass(forgotForm.value)
                if (response.status_code === 200) {
                    isForgotPassword.value = false
                } else if (response.status_code === 422) {
                    errorResponse.value = response.error_response
                }
            } catch (response) {
                console.log(response)
            }
        } else {
            return false
        }
    })
}

</script>
<style lang='scss' scoped></style>
