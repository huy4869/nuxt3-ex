import { defineStore } from 'pinia'

const appStore = defineStore('notification', {
  state: () => ({
    loading: false,
    pageError: false,
    language: '',
    errorCode: '',
    isSidebarCollapse: false,
    isSidebarHidden: false,
    isHeaderFooterHidden: false,
  }),
  getters: {
    getLoading: (state) => state.loading,
    getErrorCode: (state) => state.errorCode,
  },
  actions: {
    setLoading(data) {
      this.loading = data
    },
    setPageError(data) {
      this.pageError = data
    },
    setErrorCode(data) {
      this.errorCode = data
    },
    setLanguage(data) {
      this.language = data
    },

    /**
     * @param {boolean} data
     */
    setIsSidebarCollapse(data) {
      this.isSidebarCollapse = data
    },

    /**
     * @param {boolean} data
     */
    setIsSidebarHidden(data) {
      this.isSidebarHidden = data
    },

    /**
     * @param {boolean} data
     */
    setIsHeaderFooterHidden(data) {
      this.isHeaderFooterHidden = data
    },
  },
})
export default appStore
