var Friends;
(function (Friends) {
    Friends[Friends["Salvo"] = 5] = "Salvo";
    Friends[Friends["Ivana"] = 6] = "Ivana";
    Friends[Friends["Alessandro"] = 7] = "Alessandro";
})(Friends || (Friends = {}));
;
var a = Friends.Salvo;
var b = Friends.Alessandro;
console.log(a, b);
/*
$ tsc 5-3_enum.ts
$ node 5-3_enum.js
0 2
*/
