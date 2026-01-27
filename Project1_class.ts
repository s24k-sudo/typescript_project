class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal{
    makeSound(): void {
        console.log("Bark....");
    }
}