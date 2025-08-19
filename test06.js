//3. no parameter has return
function showHello(){
    console.log(`Wow wow wow ...`)
    return`Hello....`
}

console.log( showHello() )

//4. have paremeter has return
function calSquareArea(widths, longs){ //parameter
    return widths * longs
}

console.log(`พื้นที่สี่เหลี่ยมกว้าง 100 ยาว 50 มีพื้นที่เป็น ${calSquareArea(100, 50)}`)