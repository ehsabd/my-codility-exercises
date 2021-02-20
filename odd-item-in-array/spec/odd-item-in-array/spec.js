describe("getOddItem", function () {
    const getOddItem = require('../../index.js');

    it("Should give appropriate results", function () {
        const tests = [
            [[8, 2, 8, 2, 8, 5, 8], 5],
            [[5, 3, 4, 5, 3, 5, 5], 4],
            [[5, 3, 5, 5, 3, 5, 1], 1]
        ];
        tests.forEach((item)=>{
            expect (getOddItem(item[0])).toEqual(item[1]);
        })
    });
});