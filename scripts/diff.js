/**
 * 
 * @param {Object} obj First object to compare
 * @param {Object} newObj Second object to compare
 * @param {Array} _stack Previous stack of objects to compare
 * @returns array of differences
 */
function diff(obj, newObj, _stack) {
  if (_stack === void 0) _stack = []

  let diffs = []
  const IS_OBJ_ARRAY = Array.isArray(obj)

  let _compare = (key) => {
      let objKey = obj[key]
      let path = IS_OBJ_ARRAY ? +key : key

      if (!(key in newObj)) {
          diffs.push({
              type: "REMOVE",
              path: [path],
              oldValue: obj[key],
          })

          return "continue"
      }

      let newObjKey = newObj[key]
      let areObjects = typeof objKey === "object" && typeof newObjKey === "object"

      if (objKey && newObjKey && areObjects && (!_stack.includes(objKey))) {
          
            let nestedDiffs = diff(objKey, newObjKey, [])
            
            diffs.push.apply(diffs, nestedDiffs.map(difference => {
                difference.path.unshift(path)
                return difference
            }))

      } else if (objKey !== newObjKey && !(areObjects && (isNaN(objKey) ? objKey + "" === newObjKey + "" : +objKey === +newObjKey))) {
          
          diffs.push({
              path: [path],
              type: "CHANGE",
              value: newObjKey,
              oldValue: objKey,
          })

      }
  }

  for (let key in obj) {
      _compare(key)
  }

  const IS_NEW_OBJ_ARRAY = Array.isArray(newObj)

  for (let key in newObj) {
    if (key in obj) continue

    diffs.push({
        type: "CREATE",
        path: [IS_NEW_OBJ_ARRAY ? +key : key],
        value: newObj[key],
    })
  }


  return diffs
}


module.exports = diff