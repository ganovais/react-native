import Animal from "./Animal";

export default class Dog extends Animal {
    constructor() {
        super();
    }
    
    public comer() {
        console.log('Cachorro está comendo');
    }
}