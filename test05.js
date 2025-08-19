//Function คือ การทำงานหนึ่งๆ จะไม่ทำหากไม่เรียกใช้ Call Function
//Function มี 4  ประเภท
//1. no parameter no return
function showHi(){
    console.log(`Hi hi hi ...`)
}
showHi()

//2. have parameters no retrun
function sumNumberAndShow(n1, n2){
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
}
sumNumberAndShow(10, 20) //argument คือ ค่าที่ส่งไปให้ parameter
sumNumberAndShow(100, 200)

//3. no parameter has return

//4. have paremeter has return
