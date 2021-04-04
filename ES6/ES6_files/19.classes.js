// ES5
function car(brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
}

car.prototype = {
    warrenty : function(item){
        this.color = item; 
    }
}

// Inheritance in ES5   
function phone (brand, model, os){
    this.os = os;
    car.call(this, brand, model, "red");
}


const carObj = new car("Mahindra", "Thar", "Red");
const myPhone = new phone("Samsung", "M40", "Android");
carObj.warrenty(2);
console.log(carObj);
console.log(myPhone);

// Syntax of ES6 class, static methods, getters and setters
class school {
    constructor(name, location, status) {
        this.name = name;
        this.location = location;
        this.status = status;
    }

    addMember(firstName, lastName) {
        console.log(`hi ${firstName} ${lastName}`);
    }

    // Static method
    static owner() {
        console.log(`Ramakrishnan`);
    }

    // Setter
    set _status(x) {
        this.status = x;
    }

    // Getter
    get _name() {
        return this.name;
    };
}

const mySchool = new school("ABCD", "Chennai", "Higher secondary");
school.owner(); // Static methoda can be called only using classname and not using the instance
mySchool.addMember("Ram", "Krish");
mySchool._status = "Primary";
console.log(mySchool);