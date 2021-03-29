//var and let are same but let doesn't allow re declare
var x = 1;
var x = 2;
window.console.log(x);
let y = 23;
window.console.log(y);

//Block scoping
{
    var r = 10;
}
{
    //r is accessible as it is declared using var.
    //If it is declared using let it will not be accessible.
    console.log(r);
}