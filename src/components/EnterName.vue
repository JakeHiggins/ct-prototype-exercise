<template>
  <h2>Welcome! Please enter your name:</h2>
  <input v-model="inputName" />
  <button @click="saveName">Submit</button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()

let inputName = ''

const saveName = () => {
  userStore.name = inputName
}
</script>
