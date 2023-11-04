"use strict";
let luca = {
    name: 'Luca',
    active: true,
    albums: ['kk']
};
const createGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}`;
    }
    return 'Hello!';
};
console.log(createGuitarist(luca));
