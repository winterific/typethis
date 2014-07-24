interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}

// Can still write regular Javascript in here.
function fuckoff() {
    var x = 'asdfasdfsdf';
    return {
        x: x,
        y: "Hi there :)"
    };
}

class Vomit {
    width: number;
    height: number;

    constructor(width?: number, height?: number) {
        this.width = width;
        this.height = height;
    }
}

class Person<T> implements IPerson {
    firstName: string;
    lastName: string;
    age: number;
    puke: Vomit;
    friends: Person<T>[];
    whatever: any;
    stuff: any[];
    thoughts: T[];
    doit = (a, b) => { return "dfjasdjflkjasdf"; }

    constructor(firstName: string, lastName: string, age?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.stuff = [1, 2, 3, 4, 5, 'six', {message: "stop counting!"}];
    }

    print(): void {
        console.log(this);
    }

    addThought<T>(thought?: T): void {
        if (thought) {
            this.stuff.push(thought);
        }
    }

    kill() {
        this.age = 99999;
        this.puke = null;
        this.thoughts = null;
        this.doit = (a, b) => { return null; };
        this.firstName = "(DEAD)" + this.firstName;
        this.lastName = "(DEAD)" + this.lastName;
    }
}

var p: Person<string> = new Person<string>("Sam", "Winter", 32.1);
p.puke = new Vomit(1, 2);
p.friends = [
    new Person<string>("Bob", "Winter", 82),
    new Person<string>("Ron", "Swanson"),
    new Person<string>("Gary", "Busey", 61),
];
p.print();
p.whatever = "dfasdfsd";
p.whatever = 3.14;
p.whatever = /hithere/gi;
p.whatever = {
    paul: "newman"
};
p.whatever = p.friends; // now a reference to an array

p.print();

p.addThought("Maybe I like apples...");
p.addThought();

((x?, y?, z?) => console.log("djkfhljasdlkjflakjsdlkfjlakjsdf"))();

p.kill();
p.print();
