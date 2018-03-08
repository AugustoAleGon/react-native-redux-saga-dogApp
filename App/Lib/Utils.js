// Function that return a value of an array
export const randomItemOfArray = (arr, randomNumber) => {
  // let randomNumber = Math.floor(Math.random() * (arr.length - 0) )+ 0
  return arr[randomNumber]
}

// Function that validate is our user is right
export const validateUser = (username, password) => {
  return username === 'augusto' && password === '123'
}
