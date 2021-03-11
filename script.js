//Variáveis do tipo LET podem ser alteradas futuramente
let name = "Gabriel";
////Variáveis do tipo CONST não podem ser alteradas futuramente
const age = 23;

const person = {
    name: "Gabriel",
    age: 23,
    skills: ["PHP", "HTML", "React Native"],
    family: [
        {
            id: 1,
            kinship: 'mother',
            name: 'fulana', 
        },
        {
            id: 2,
            kinship: 'father',
            name: 'John doe', 
        },
    ]

}

// console.log(`Meu nome é: ${person.name}`)
// console.log('Minha idade é: ' + person.age)
// console.log(person.skills);

person.skills.forEach(skill => {
    console.log(skill);
})

let newArr = person.skills.map(skill => ( skill + ' 11'))
// console.log('newArr', newArr);

let index = person.skills.findIndex(skill => skill === 'HTML');

if(index > -1) {
    person.skills.splice(index, 1);
} 

let element = person.family.find(kinship => kinship.id === 1);

console.log('element', element);


function run(variavel) {
    return 'run function ' + variavel;
}

const runFunctino = () => {
    return 'run arrow function';
}

// console.log(runFunctino());
// console.log(run('Teste'));