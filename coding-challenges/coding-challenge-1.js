let markMass=78, markHeight=1.69, johnMass=92, johnHeight=1.95;
const MARKBMI = markMass / (markHeight*markHeight);
const JOHNBMI = johnMass / (johnHeight*johnHeight);

let markHigherBmi = MARKBMI > JOHNBMI

console.log(markHigherBmi)