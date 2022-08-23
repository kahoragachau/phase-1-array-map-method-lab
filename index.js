const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // let newArray = []
  // console.log(tutorials.map(tutorial => {
  //   const splitIntoArray = tutorial.split(" ")
  //   const upperCaseFirstLetter = splitIntoArray.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
  //   return upperCaseFirstLetter
  // }))
  // console.log(tutorials.split(" ").map(letter => letter[0]))
  return tutorials.map(tutorial => {
    const splitIntoArray = tutorial.split(" ")
    const upperCaseFirstLetter = splitIntoArray.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
    return upperCaseFirstLetter
  })
}