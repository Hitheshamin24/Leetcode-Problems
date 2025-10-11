/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // const sqrt5=Math.sqrt(5);
    // const fibN=Math.pow((1+sqrt5)/2,n)-Math.pow((1-sqrt5)/2,n)
    // return Math.round(fibN/sqrt5);
    const array=[0,1];
    if(n<2){
       return n;
     }
     for(let i=2;i<=n;i++){
        array.push(array[i-2]+array[i-1])
     }
     return array[n];
};