class a {
    constructor(val) {
        this.val = val;
    }
    get valAcc() {
        return this.val + 10;
    }
    set valAcc(val) {
        this.val = val - 10;
    }
}
let inst = new a(10);
console.log(inst.valAcc);
