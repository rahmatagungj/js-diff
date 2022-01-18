const diff = require('./scripts/diff')

let identityOne = {
  name: 'rahmat',
  city: 'jakarta',
  hobbies: ['coding', 'reading', 'listening music'],
}

let identityTwo = {
  name: 'agung julians',
  city: 'Bandung',
  hobbies: ['coding'],
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