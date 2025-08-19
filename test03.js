//-----------------------------------------------------
//Expression นิพจน์ คือตัวแปร การคำนวณ การเปรียบเทียบ เรียกใช้ฟังก์ชั่น ...

// 2. Loop/Iteration/Repeation ทำซ้ำ คือ ทำงานเดิมๆ ซ็ำ
// รู้จำนวนครั้งในการทำซ้ำหรือ ไม่รู้จำนวนครั้งในการทำซ้ำ
// while, do-while, for

let i = 1
while( i <= 5){
    // console.log('SAU....')
    // console.log(i + i + 'SAU')
    console.log (`${i} SAU`)  //backtick ' Alt+9+6
    i = i + 1; //++i, i++, i += 1
    
}
//-------------------
console.log('++++++++++++++++++++++++')
let j = 1
do{
    console.log(`${i} SAU`) //backtick ' Alt+9+6
    j = j + 1;
}while(j <= 5);
