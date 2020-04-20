const array = [10, -5, 30, -123, 0, 320, 79, 15];
let res = 0;
const add = [];
if (array[0] > 0) {
    add.push(array[0])
}
if (array[1] > 0) {
    add.push(array[1])
}
if (array[2] > 0) {
    add.push(array[2])
}
if (array[3] > 0) {
    add.push(array[3])
}
if (array[4] > 0) {
    add.push(array[4])
}
if (array[5] > 0) {
    add.push(array[5])
}
if (array[6] > 0) {
    add.push(array[6])
}
if (array[7] > 0) {
    add.push(array[7])
}
console.log(add)
for (let i = 0; i < add.length; i++) {
    res += add[i];
    
}
console.log(res);