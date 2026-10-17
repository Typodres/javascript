const array = ['keykboard', 23, true, 12, 'monitor',false, -40, 'black', false, 140, 238, -34, true];
const counts = { number: 0, string: 0, boolean: 0 };
for (const item of array) {
    const type = typeof item;
    counts[type]++;
}; console.log(counts);
delete counts.number
delete counts.string
delete counts.boolean 
for (const item of array) {
const type2 = typeof item;
 if (!(type2 in counts)) {
counts[type2] = 0;
 } counts[type2]++;
}; console.log(counts);






