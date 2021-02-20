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

module.exports = getOddItem;