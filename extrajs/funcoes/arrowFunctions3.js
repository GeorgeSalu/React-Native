let comparaComThis = function(param) {
  console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = para => console.log(this === param)
comparaComThisArrow(global)