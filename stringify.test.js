const stringify = require('./stringify')

test('empty array', () => {
  expect(stringify([])).toBe('[]')
})

test('array one undefined', () => {
  expect(stringify([undefined])).toBe('[null]')
})

test('array one null', () => {
  expect(stringify([null])).toBe('[null]')
})

test('array one int', () => {
  expect(stringify([92])).toBe('[92]')
})

test('array one bool', () => {
  expect(stringify([true])).toBe('[true]')
  expect(stringify([false])).toBe('[false]')
})

test('array one string', () => {
  expect(stringify(['foo'])).toBe('["foo"]')
})

test('array multiple ints', () => {
  expect(stringify([1,2,3])).toBe('[1,2,3]')
})

test('array multiple strings', () => {
  expect(stringify(["foo", "bar", "baz"])).toBe('["foo","bar","baz"]')
})

test('marray multiple types', () => {
  expect(stringify([true, false, 1, "two", undefined, null])).toBe('[true,false,1,"two",null,null]')
})

test('empty object', () => {
  expect(stringify({})).toBe('{}')
})

test('simple object', () => {
  expect(stringify({
    name: "Steve",
    zip: 98144,
    pets: [
      {type: "dog", name:"Boomhauer"},
      {type: "cat", name:"Morty"},
      {type: "cat", name:"Seamus"}
    ]
  })).toBe('{"name":"Steve","zip":98144,"pets":[{"type":"dog","name":"Boomhauer"},{"type":"cat","name":"Morty"},{"type":"cat","name":"Seamus"}]}')
})

