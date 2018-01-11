let arr=[1,2];
for (let i of arr){
  console.log(i);
};
let str='se lo arcivescovo di costantinopoli si disarcivescovolizzasse';
for (i of str) {
  console.log(i);
}
let mp= new Map([
  ['nome', 'Alessandro'],
  ['cognome', 'Aprile'],
  ['indirizzo', 'via volontari del sangue 182'],
  ['città','Sesto San Giovanni']
]);
for (i of mp) {
  console.log(i);
}
let myAnimals = new Set(['🐷', '🐢', '🐷', '🐷']);
for (i of myAnimals) {
  console.log(i);
}
