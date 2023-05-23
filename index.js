class Matrix {
  constructor(data, copy=true) {
    this.data = this.#newMatrix(data, copy)
  }

  *#gen(d) {
    yield* d
  }

  #copyValue(d) {
    let arr = new Array()
    const gen = this.#gen(d)
    let iter = gen.next()
    while (!iter.done) {
      let data = iter.value
      iter = gen.next()
      if (Array.isArray(data)) {
        arr.push(this.#copyValue(data))
        continue
      }
      arr.push(data)
    }
    return arr
  }

  #copyMatrix(data) {
    let arr = new Array()
    arr = this.#copyValue(data)
    return arr
  }

  #newMatrix(data, copy=true) {
    return this.#initialiseWithData(data, copy)
  }


  #initialiseWithData(data, copy=true) {
    if (!Array.isArray(data)) throw new Error('data is not an array')
    if (!copy) return data
    return this.#copyMatrix(data)
  }

}


