// arrow function
// กรณีมี 1 parameter พารามีเตอร์จะอยู่ในวงเล็บหรือไม่ก็ได้
// const dtiA = (yourname) =>{
const dtiA = yourname =>{
    console.log{`สวัสดี ${yourname}`};
}

// กรณีคำสั่งการทำงานมีคำสั่งเดียว และไม่ใช่ return ไม่ต้องอยู่ใน { } ก็ได้
const dtiB = yourname => console.log(`สวัสดี ${yourname}`);

// กรณีคำสั่งการทำงานมีคำสั่งเดียว และเป็น return
// ไม่ต้องอยู่ใน { } ก็ได้ แต่จะต้องเขียน return ลง
const dtiC = radius => {
    return 3.14 * radius * radius
}

const dtiD = radius => 3.14 * radius * radius
