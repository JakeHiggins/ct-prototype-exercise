import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    /** @type {string} */
    name: '',

    /** @type {number} */
    remainingQuestions: import.meta.env.VITE_MAX_QUESTIONS,

    /** @type {number} */
    lastAnsweredAt: Date.now()
  }),
  getters: {
    canRequestQuestion: (state) => state.remainingQuestions > 0
  },
  actions: {
    answerQuestion() {
      this.remainingQuestions--
    },

    refreshQuestions() {
      if (
        Date.now() - this.lastAnsweredAt >= import.meta.env.VITE_REFACTORY_PERIOD &&
        this.remainingQuestions < import.meta.env.VITE_MAX_QUESTIONS
      ) {
        this.remainingQuestions++
        this.lastAnsweredAt = Date.now()
      }
    }
  }
})
