const assert = (unit) => {
  return {
    with(expected, callback) {
      return {
        to(truth) {
          return callback(unit, expected) == truth
        }
      }
    }
  }
}

const console_success = (d) => {
  console.log(`%c \u2705 ${d}`, `color: #bada55`)
}

const console_failure = (d) => {
  console.log(`%c \u274c ${d}`, `color: #ff9494`)
}

const test = (desc) => {
  return {
    thisFn(unit, expected, callbackFn, truth) {
      assert(unit).with(expected, callbackFn).to(truth) ? 
        console_success(desc): console_failure(desc)
    }
  }
}

