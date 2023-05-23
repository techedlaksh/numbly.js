// 1-d matrix initialise test
test('matrix with 1-d javascript array of 2 elements').thisFn(
  new Matrix([1,2]),
  [1, 2],
  (u, e) => {
    if (!(u.data.length == e.length)) return false
    if (!u.data.every((x, ix) => x == e[ix])) return false
    return true
  },
  true
)

// 1-D matrix initialise test
test('matrix with 1-d javascript array of 4 elements').thisFn(
  new Matrix([10, 20, 30, 40]),
  [10, 20, 30, 40],
  (u, e) => {
    if (!(u.data.length == e.length)) return false
    if (!u.data.every((x, ix) => x == e[ix])) return false
    return true
  },
  true
)

// 2-D matrix initialise test
test('matrix with 2-d javascript array of 4 elements').thisFn(
  new Matrix([[10, 20], [30, 40]]),
  [[10, 20], [30, 40]],
  (u, e) => {
    if (!(u.data.length == e.length)) return false
    if (!(u.data[0].length == e[0].length)) return false
    if (!(u.data.flat().length == e.flat().length)) return false
    if (!u.data.flat().every((x, ix) => x == e.flat()[ix])) return false
    return true
  },
  true
)

// non array value test
test('passing non array value would not initialise, catches the error above').thisFn(
  () => {new Matrix(0)},
  [0],
  (u, e) => {
    try {
      u()
    } catch (err) {
      console.log(err)
      return false
    }
    return true
  },
  false
)

// 3-D matrix initialise test
test('matrix with 3-d javascript array of 8 elements').thisFn(
  new Matrix([[[10,20],[30,40]],[[50,60],[70,80]]]),
  [[[10,20],[30,40]],[[50,60],[70,80]]],
  (u, e) => {
    if (!(u.data.length == e.length)) return false
    if (!(u.data[0].length == e[0].length)) return false
    if (!(u.data.flat(2).length == e.flat(2).length)) return false
    if (!u.data.flat(2).every((x, ix) => x == e.flat(2)[ix])) return false
    return true
  },
  true
)

// 4-D matrix initialise test
test('matrix with 4-d javascript array of 2 elements').thisFn(
  new Matrix([[[[10]]], [[[20]]]]),
  [[[[10]]], [[[20]]]],
  (u, e) => {
    if (!(u.data.length == e.length)) return false
    if (!(u.data[0].length == e[0].length)) return false
    if (!(u.data.flat(3).length == e.flat(3).length)) return false
    if (!u.data.flat(3).every((x, ix) => x == e.flat(3)[ix])) return false
    return true
  },
  true
)
