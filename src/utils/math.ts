export const getRandomInt = (min: number, max: number) => {
  const minC = Math.ceil(min)
  const maxF = Math.floor(max)
  return Math.floor(Math.random() * (maxF - minC) + minC)
}

export const isEven = (num: number) => {
  return num % 2 === 0
}
