const first = [10, 20, 30, 40 ];
const second = [11, 22, 34, 33 ];
const third = [15, 25, 36, 45 ];

const full = [...first, ...second, ...third];
console.log(full);

const third2 = Math.max(...third);
console.log(third2);