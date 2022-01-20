const diff = require('./src/diff')

let identityOne = {
  a: 1,
  b: 2,
  c: ["a", "b", "c"],
  d: {
      e: 1,
      f: 2,
      g: ["a", "b", "c"],
  }
}

let identityTwo = {
  a: 1,
  c: ["b", "a", "c"],
  d: {
      e: 1,
      f: 2,
      g: ["a", "b", "d"],
  },
  h: 3,
  i: "i"
}

let result = diff(identityOne, identityTwo)

result.forEach(function (difference) {
  if (difference.type === "CREATE") {
      console.log(`${difference.path.join(".")} is created with value ${difference.value}`)
  } else if (difference.type === "REMOVE") {
      console.log(`${difference.path.join(".")} is removed with value ${difference.oldValue}`)
  } else if (difference.type === "CHANGE") {
      console.log(`${difference.path.join(".")} is changed from ${difference.oldValue} to ${difference.value}`)
  }
})
  
console.log("\nDetails of the differences: ", result)