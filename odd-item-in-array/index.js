function getOddItem(arr){
    let oddItem = null;
    let counts = {};
    arr.forEach(item => {
        if (!(item in counts)){
            counts[item] = 1;
        }else{
            counts[item]++;
        }
    });
    for (let num in counts){
        var count = counts[num];
        if (count % 2 ==1){ return parseInt(num)}
    }
}


console.log(getOddItem([8,2,8,2,8,5,8])); // should return 5
console.log(getOddItem([5,3,4,5,3,5,5])); // should return 4
console.log(getOddItem([5,3,5,5,3,5,1]));  // should return 1
