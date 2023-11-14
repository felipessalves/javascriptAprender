const data1 = new Date();
console.log(data1)
const data2 = new Date('November 10 2021 10:30')
console.log(data2)
const data3 = new Date(2021,11,21,12,30)
console.log(data3)

console.log(data3.setFullYear(2050))
console.log(data3.toDateString())
console.log(data3.toTimeString())
console.log(data3.toISOString())
