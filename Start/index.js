// // TIPOS
// // tipos mais comum de declaracao de variavel
// var x = 5;
// var y = [];
// var z = [];
// var h = ["ola", 3]; // qualquer tipo
// // Objetos e array
// var ls = {
//     q: 3,
//     w: 2
// };
// var sl = ["OLA", "OLA", "OLA", "OLA"];
// var arr = [3];
// // Operador não obrigatorio, ou seja nao e obrigatorio ter aquele elemento ("?")
// var lls = {
//     ft: 3
// };
// // Funco 
// function parametros(x, y) {
// }
// //tipo de retorno da funcao
// function parametrosReturn(x, y) {
//     return "oi";
// }
// // Props opcionais
// function opcionais(a, b) {
//     console.log(a);
// }
// opcionais(3);
// // Validando argumento opcional
// function advancedGreeting(fName, lName) {
//     if (lName !== undefined) {
//         return console.log("ola", fName, lName);
//     }
//     return console.log("Ola", fName);
// }
// advancedGreeting("Gabriel", "marinho");
// advancedGreeting("Gabriel");
// console.log("===============");
// // Union Type
// function showBalanca(balance) {
//     return console.log("\nO saldo final \u00E9 ".concat(balance));
// }
// showBalanca(100);
// showBalanca('500');
// var arr2 = [1, "teste", true];
// console.log("===============");
// var showUserRole = function (role) {
//     if (typeof role === 'boolean') {
//         return console.log("User not aproved");
//     }
//     return console.log("User role is", role);
// };
// showUserRole(false);
// showUserRole("Admin");
// console.log("===============");
// // o tipo que o id é string e number
// function showId(id) {
//     console.log(id);
// }
// showId("ola sou string");
// showId("ola sou number");
// console.log("===============");
// function showCoords(obj) {
//     console.log("X: ".concat(obj.PointX, " Y: ").concat(obj.PointY, " Z: ").concat(obj.PointZ));
// }
// var coordObj = {
//     PointX: 10,
//     PointY: 15,
//     PointZ: 30
// };
// showCoords(coordObj);
// console.log("===============");
// var somePerson = { name: "Gab", age: 19 };
// // Literal Types
// function showDirection(direction) {
//     console.log("A direcao \u00E9 ".concat(direction));
// }
// showDirection("left");
// showDirection("up");
