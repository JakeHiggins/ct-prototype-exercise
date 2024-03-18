<template>
  <v-expansion-panel>
    <v-expansion-panel-title :class="headerColor">Question {{ index }}</v-expansion-panel-title>
    <v-expansion-panel-text>
      <p>
        The starting number is <span class="number">{{ randomNumber }}</span> and it is
        <span class="type">{{ isEven(randomNumber) ? 'even' : 'odd' }}</span
        >.
      </p>

      <p>
        The next number is <span class="number">{{ targetNumber }}</span>
      </p>
      <p class="mb-4">Is this number</p>
      <v-btn :disabled="answered" @click="submitEven">Even</v-btn>
      <span class="ma-4"> or </span>
      <v-btn :disabled="answered" @click="submitOdd">Odd</v-btn>
      <div class="mt-4" v-if="answered === true && correct === true">
        <h3>Correct! {{ targetNumber }} is {{ isEven(targetNumber) ? 'even' : 'odd' }}.</h3>
      </div>
      <div class="mt-4" v-if="answered === true && correct === false">
        <h3>Incorrect, {{ targetNumber }} is {{ isEven(targetNumber) ? 'even' : 'odd' }}.</h3>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
import { isEven } from '@/utils/math'
import { computed, ref } from 'vue'

const props = defineProps({
  randomNumber: {
    type: Number,
    default: 0
  },
  index: {
    type: Number,
    default: 0
  }
})

const targetNumber = props.randomNumber + 1
const answered = ref(false)
const correct = ref(false)

const submitEven = () => {
  answered.value = true
  if (isEven(targetNumber)) {
    correct.value = true
  }
}

const submitOdd = () => {
  answered.value = true
  if (!isEven(targetNumber)) {
    correct.value = true
  }
}

const headerColor = computed(() => {
  return answered.value ? (correct.value ? 'correct' : 'incorrect') : ''
})
</script>

<style scoped>
.number {
  color: blue;
  font-size: 2rem;
}

.type {
  color: blue;
  font-size: 2rem;
}

.correct {
  background-color: green;
}

.incorrect {
  background-color: red;
}
</style>
