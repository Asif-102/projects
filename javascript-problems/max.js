// function whoIsBigger(business,minister,sochib){
//     if (business > minister && business > sochib) {
//         console.log('Business is bigger');
//     } else if (minister > business && minister > sochib) {
//         console.log('Minister is bigger')
//     } else {
//         console.log('Sochib is bigger');
//     }
// }
// whoIsBigger(654,2334,654);

var business = 850;
var minister = 650;
var sochib = 950;

var max = Math.max(business, minister, sochib);
console.log(max);