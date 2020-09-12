const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: "",

    getLength() {
        if (this.chain.length === 0) {
            return 0;
        } else {
            return this.chain.split("~~").length;
        }
    },

    addLink(value) {
        if (this.getLength() === 0) {
            this.chain = `( ${value} )`;
        } else {
            this.chain += `~~( ${value} )`;
        }
        return this;
    },

    removeLink(position) {        
        if (!Number.isInteger(position) || position - 1 > this.getLength()) {
            this.finishChain();
            throw new Error("Invalid position!");
        }
        this.chain = this.chain.split("~~");
        this.chain.splice(position - 1, 1);        
        this.chain = this.chain.join("~~");
        return this;
    },
    reverseChain() {
        this.chain = this.chain.split("~~").reverse().join("~~");
        return this;
    },
    finishChain() {
        let result = this.chain;
        this.chain =""
        return result;
    },
};

module.exports = chainMaker;
