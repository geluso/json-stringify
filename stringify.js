function stringify(oo) {
  if (oo === undefined || oo === null) {
    return 'null'
  }

  if (typeof oo === 'boolean') {
    if (oo) {
      return 'true'
    } else {
      return 'false'
    }
  } 

  if (typeof oo === 'number') {
    return '' + oo
  }

  if (typeof oo === 'string') {
    return '"' + oo + '"'
  }

  if (Array.isArray(oo)) {
    if (oo.length === 0) {
      return '[]'
    } else {
      let result = stringify(oo[0])
      oo.forEach((item, index) => {
        if (index === 0) return
        result += ',' + stringify(item) 
      })
      return '[' + result +']'
    }
  }

  const entries = Object.entries(oo)
  if (entries.length === 0) {
    return '{}'
  } else {
    let [key0, value0] = entries[0]
    let result = '"' + key0 + '":' + stringify(value0)
    entries.forEach(([key, value], index) => {
      if (index === 0) return
      result += ',' + '"' + key + '":' + stringify(value)
    })  
    return '{' + result + '}'
  }
}

module.exports = stringify
