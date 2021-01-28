function getBinaryGapLength(N){
	const binary = N.toString(2);
	const matches = binary.match(/[0]+/g)
	if (matches.length==0) return 0;
	const matchLengths = matches.map((m)=>(m.length));
        return Math.max(...matchLengths);

}

console.log( getBinaryGapLength(28402930147102222));
console.log( getBinaryGapLength(28402930147109991));
console.log( getBinaryGapLength(28402930147103212));
console.log( getBinaryGapLength(13566738409630306));
console.log( getBinaryGapLength(54099135055964770));
