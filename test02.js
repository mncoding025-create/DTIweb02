// Control Flow - Control Statement
// 1. Selection/condition/Decision  เลือกทำ คือ ต้องพิสูจน์ตรวจสอบก่อนที่จะทำอะไร
// พิสูจน์ครั้งเดียว จริงทำ เท็จไม่ทำ if
let data1
if (data1 > 20){
    console.log("wow....")
}

// พิสูจน์ครั้งเดียว จริงทำ เท็จก็ทำ if-else
let data2 = 55
if(data2 % 10 >= 5){
    console.log('Wow.....')
}else{
    console.log('Not Wow....')
}
// พิสูจน์หลายครั้ง if-else-if, switch-case
let score = 15
if(score >= 80){
    console.log('A')
}else if(score >= 70){
    console.log('B')
}else if(score >= 60){
    console.log('c')
}else if(score >= 50){
    console.log('D')
}else {
    console.log('F')
}

letdata4 = 1115
switch(data4){
    case 191 : console.log('โทรหาตำรวจ')
                break
    case 1112 : console.log('โทรสั่ง Pizza')
                break
    case 1115 : console.log('โทรสั่ง KFC')
                console.log('The Pizza')
                // break
    case 1170 : console.log('โทรหา จส.100')
                //break
    default : console 
}
