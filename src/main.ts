type Guitarist = {
  name: string
  active: boolean
  albums: (string | number)[]
}

let luca: Guitarist = {
  name: 'Luca',
  active: true,
  albums: ['kk']
}

const createGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name}`
  }
  return 'Hello!' 
}

console.log(createGuitarist(luca))