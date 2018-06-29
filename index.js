var ary1 = ['Sato','Takae','Osada','Hio','Saitoh','Sato']
var ary2 = ['Yabuki','Aoki','Moriyama','Yamada']

with(console){
    log(ary1.length)
    log(Array.isArray(ary1))
    log(ary1.toString())
    log(ary1.indexOf('Sato'))
    log(ary1.lastIndexOf('Sato'))
    /*配列を繋げる*/
    log(ary1.concat(ary2))
    log(ary1.join('/'))
    log(ary1.slice(1))
    log(ary1.slice(1,2))
    log(ary1.splice(1,2,'Kakeya','Yamaguchi'))
    log(ary1)
    log(Array.of(20,40,60))
    log(ary1.copyWithin(1,3,5))
    log(ary1)
    log(ary2.fill('Suzuki',1,3))
    log(ary2)
    log(ary1.pop())
    log(ary1)
    log(ary1.push('Kondo'))
    log(ary1)
    log(ary1.shift())
    log(ary1)
    log(ary1.unshift('Ozawa','kuge'))
    log(ary1)
    log(ary1.reverse())
    log(ary1)
    /*昇順に並び替え*/
    log(ary1.sort())
    log(ary1)
}