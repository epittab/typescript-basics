function combine(input1: number | string, input2:number | string) {
    let result ;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return result= input1 + input2;
    } else {
        return result= input1.toString() + input2.toString();
    }
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Enrique", "Chery");
console.log(combinedNames);