/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    let m=grid.length,n=grid[0].length
    let row=m-1,col=0,count=0

    while(row>=0 && col<n){
        if(grid[row][col]<0){
            count+=n-col;
           row--
        }
        else{
            col++
        }
    }
    return count
};