var Friends;
(function (Friends) {
    Friends[Friends["Salvo"] = 5] = "Salvo";
    Friends[Friends["Ivana"] = 6] = "Ivana";
    Friends[Friends["Alessandro"] = 7] = "Alessandro";
})(Friends || (Friends = {}));
;
var a = Friends.Salvo;
var b = Friends.Alessandro;
var c = Friends[6];
console.log(a, b, c);
/*
$ tsc 5-3_enum.ts
$ node 5-3_enum.js
5 7
*/
