// Can still write regular Javascript in here.
function fuckoff() {
    var x = 'asdfasdfsdf';
    return {
        x: x,
        y: "Hi there :)"
    };
}

var Vomit = (function () {
    function Vomit(width, height) {
        this.width = width;
        this.height = height;
    }
    return Vomit;
})();

var Person = (function () {
    function Person(firstName, lastName, age) {
        this.doit = function (a, b) {
            return "dfjasdjflkjasdf";
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.stuff = [1, 2, 3, 4, 5, 'six', { message: "stop counting!" }];
    }
    Person.prototype.print = function () {
        console.log(this);
    };

    Person.prototype.addThought = function (thought) {
        if (thought) {
            this.stuff.push(thought);
        }
    };

    Person.prototype.kill = function () {
        this.age = 99999;
        this.puke = null;
        this.thoughts = null;
        this.doit = function (a, b) {
            return null;
        };
        this.firstName = "(DEAD)" + this.firstName;
        this.lastName = "(DEAD)" + this.lastName;
    };
    return Person;
})();

var p = new Person("Sam", "Winter", 32.1);
p.puke = new Vomit(1, 2);
p.friends = [
    new Person("Bob", "Winter", 82),
    new Person("Ron", "Swanson"),
    new Person("Gary", "Busey", 61)
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

(function (x, y, z) {
    return console.log("djkfhljasdlkjflakjsdlkfjlakjsdf");
})();

p.kill();
p.print();
