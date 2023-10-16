// De esta forma no se tipa una funcion
function saludarMal({ name: string, age: number }) {
	console.log(`Hola ${name} tienes ${age} number`)
}

saludarMal({ name: 'Luca', age: 20 }) // en este caso el tipo de name y age es 'any'

// Esta es una forma de tipar una funcion
function saludar(persona: { name: string; age: number }) {
	const { name, age } = persona // lo malo es que te obliga a sacar name y age de persona
	console.log(`Hola ${name}, tienes ${age} vueltas al sol`)
}

saludar({ name: 'Luca', age: 20 })

// Esta es la forma adecuada de tipar una funcion
function saludar2({ name, age }: { name: string; age: number }) {
	console.log(`Hola ${name}, tienes ${age} años de edad`)
}

saludar2({ name: 'Sebastian', age: 20 })

// Inferencia del tipo de return
function saludar3({ name, age }: { name: string; age: number }) {
	console.log(`Hola ${name}, tienes ${age} años`)
	return age // el tipo de age es 'number'
}

let username: string = saludar3({ name: 'Luca', age: 20 })
let nickname: number = saludar3({ name: 'Luca', age: 20 })

// Para tipar el return de la funcion
function saludar4({ name, age }: { name: string; age: number }): number {
	console.log(`Hola ${name}, tienes ${age} años`)
	return age
}

function saludar5({ name, age }: { name: string; age: number }): string {
	console.log(`Hola ${name}, tienes ${age} años`)
	return age
}

// const sayHiFromFunction = (fn) => { //Tenemos una arrow function que recibe como parametro una funcion
//   return fn('Luca') // Esa funcion se ejecuta dentro y recibe el parametro 'Luca'
// }

// sayHiFromFunction((name) => { // La funcion dentro de los primeros parentesis, es la funcion 'fn' que recibe la arrow function
//   console.log(`Hola ${name}`)
// })

// para el tipado de la funcion: la funcion que yo espero es una que tiene un parametro 'name' de tipo 'string' que no tiene un return, o sea no devuelve nada, lo correcto es usar 'void' en este caso
const sayHiFromFunction = (fn: (name: string) => void) => {
	fn('Luca')
}

const sayHi = (name: string) => {
	// Esta es la funcion que se ejecuta dentro de la arrow function
	console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// Tipado de arrow functions
const restar = (a: number, b: number): number => {
	return a + b
}

// Never, para funciones que sabes que nunca van a devolver nada
function throwError(message: string): never {
	throw new Error(message)
}

//Inferencia de funciones anonimas segun el contexto
const avengers = ['spiderman', 'ironman', 'hulk']

//Como avengers es un array de strings sabe que avenger sera un string
avengers.forEach(function (avenger) {
	console.log(avenger.toUpperCase())
})

avengers.forEach((avenger) => {
	console.log(avenger.toUpperCase())
})

// Function and Arrow Function

async function FetchApi() {
	const res = await fetch('')
	const data = await res.json()
	console.log(data)
}

const fetchApi = async () => {
	const res = await fetch('')
	const data = await res.json()
	console.log(data)
}

//Inferencia de Objetos

// Type Alias (Poderoso)

type Hero = {
	// Pascalcase
	name: string
	age: number
	// isActive: boolean
}

const hero: Hero = {
	name: 'Clint',
	age: 50,
}

hero.power = 2323
hero.name = true
hero.name = 'Peter'

const createHero = (name: string, age: number): Hero => {
	return {
		name,
		age,
	}
}

const spiderman = createHero('Peter', 15)

// Otra forma de hacer lo mismo
const CreateHero = (hero: Hero): Hero => {
	const { name, age } = hero
	return { name, age }
}

let badThor = CreateHero('Thor', 1500)
let thor = CreateHero({ name: 'Thor', age: 1500 })

// Optional properties

type Chatbot = {
  readonly id?: number
	model: string
	temperature: number
	max_tokens: number
	isActive?: boolean // se agrega el ? para que sea opcional
}

let vendedorBot: Chatbot = {
	model: 'gpt-3.5-turbo',
	temperature: 0.9,
	max_tokens: 150,
}

const createChatbot = (chatbot: Chatbot): Chatbot => {
	const { model, temperature, max_tokens } = chatbot
	return { model, temperature, max_tokens, isActive: true }
}

const asistenteChatbot = Object.freeze(createChatbot({ // El Object.freeze() lo hace inmutable asi quitemos el readonly de type Chatbot
	model: 'gpt-3.5-turbo',
	temperature: 0.5,
	max_tokens: 150,
}))

asistenteChatbot.id = 4243243242 // Esto no lo hace inmutable