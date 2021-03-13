import Animal from './Animal';
import Dog from './Dog';
import correr, { andar } from './jobs';

const animal = new Animal();
animal.comer();

const dog1 = new Dog();
dog1.comer();
dog1.locomover();

correr();
andar();