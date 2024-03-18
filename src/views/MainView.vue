<template>
  <div class="main">
    <h1 class="mb-4">Welcome to the Flim-Flam Syndrome MVP!</h1>
    <h3 class="mb-4">
      You can review {{ userStore.remainingQuestions }} more numbers today to help with your FFS
    </h3>
    <v-btn class="mb-6" @click="addNumber">Request Number</v-btn>
    <v-expansion-panels>
      <NumberQuestion
        v-for="(num, index) in requestedNumbers"
        :key="num"
        :index="index + 1"
        :random-number="num"
      />
    </v-expansion-panels>
    <v-snackbar v-model="snackbar" multi-line>
      You answered all the questions for now, great job! Have a good day and come back later for
      more help with your FFS.

      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import NumberQuestion from '@/components/NumberQuestion.vue'
import { getRandomInt } from '@/utils/math'
import { reactive, ref } from 'vue'

const userStore = useUserStore()

const requestedNumbers: number[] = reactive([])
const snackbar = ref(false)

const addNumber = () => {
  if (userStore.canRequestQuestion) {
    const randomNumber = getRandomInt(
      import.meta.env.VITE_MIN_NUMBER_VALUE,
      import.meta.env.VITE_MAX_NUMBER_VALUE
    )
    requestedNumbers.push(randomNumber)

    userStore.answerQuestion()
    userStore.lastAnsweredAt = Date.now()
  } else {
    snackbar.value = true;
  }
}

setInterval(userStore.refreshQuestions, import.meta.env.VITE_REFACTORY_PERIOD)
</script>

<style></style>
