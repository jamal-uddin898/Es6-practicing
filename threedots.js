const ages = [12, 13, 16, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 55];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);
const bussiness = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 876];
// const maximum = Math.max(bussiness, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);
