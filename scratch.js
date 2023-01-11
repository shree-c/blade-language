let obj = {
  str: ''
}

function rec(num, obj, lim) {
  if (num === lim)
    return
  else {
    obj.str += num.toString()
    rec(num + 1, obj, lim)
  }
  console.log(num)
}

console.log(rec(1, obj, 20))

console.log(obj)
