//ES5
document.getElementById("1").addEventListener("click",function(){
    console.log("1");
});

//ES6
document.getElementById("2").addEventListener("click",() => {
    console.log("2");
});

// For Map functions 
//ES5
var list1 = [1,2,3];
var list2 = (list1.map(function(x){
    return x*2;
}));
console.log(list2);

//ES6
let list3 = (list1.map(x => {
    return x*2;
}));
console.log(list3);

//If the arrow funcitons return value
let list4 = (list1.map(x => x*2));
console.log(list4);

//this keyword
//ES5
var player = {
    name : "Ram",
    click : function(){
        var playerName = this;
        document.getElementById("3").addEventListener("click",function(){            
            console.log(playerName.name);
        })
    }
}
player.click();

//ES6
let player1 = {
    name : "Krish",
    click : function(){
        document.getElementById("3").addEventListener("click",() => {            
            console.log(this.name);
        })
    }
}
player1.click();
