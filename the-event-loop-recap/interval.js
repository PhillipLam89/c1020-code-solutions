/* eslint-disable no-console */
let count = 3
const cycle = setInterval( () => {
  console.log(count)
  count--
  if (count === 0) {
    console.log('Blast off!')
    clearInterval(cycle)
  } else {
    count
  }
},1000)
