var Friends;
(function (Friends) {
    Friends[Friends["Salvo"] = 0] = "Salvo";
    Friends[Friends["Ivana"] = 1] = "Ivana";
    Friends[Friends["Alessandro"] = 2] = "Alessandro";
})(Friends || (Friends = {}));
;
var a = Friends.Salvo;
var b = Friends.Alessandro;
console.log(a, b);
