class car {
    constructor(brand, model, location1){
        this.brand = brand;
        this.model = model;
        this.location1 = location1 || "Chennai"; // Setting a default value
    }
}

class phone extends car {
    constructor(brand, model, os) {
        super(brand, model);
        this.os = os;
        console.log(this.location1);
    }
}

const myPhone = new phone("Samsung", "M40", "Android");
console.log(myPhone);