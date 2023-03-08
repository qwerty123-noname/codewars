let answer = 0;
function BitCounting(num) {
	let numstr = "";
	let numb = num;
	for(let i=numb;i>0;i = Math.trunc(i/2)) {
		if (i % 2 == 0) {
			numstr += "0";
		} else {
			numstr += "1";
		}
	}
	console.log(numstr)

	let answer = 0;
	for(let m = 0; m<numstr.length; m++) {
		if (numstr[m] = "0") {
			answer += +numstr[m];
		} else {
			answer += +numstr[m];
		}
	}
	return answer
}
console.log(BitCounting(1234))




