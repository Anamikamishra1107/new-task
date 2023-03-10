// using rest 
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs){
        total += arg;
    }
    return total;

}
console.log(sum(1,2,3,4,5,6))
// using spread
let numbers = [ 5,7,2,6,8];
let add_value = 0;
function add(...number){
    var holdValue = {...number};
    holdValue[0].forEach((value,index) => {
        add_value = add_value+ value;
})
}
add(numbers);
console.log("add_value",add_value);