"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    get items() {
        return [...this._items];
    }
    calculateWithoutDiscount() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
    calculateWithDiscount(discount) {
        return this._items.reduce((total, item) => total + (item.price * (discount / 100)), 0);
    }
    deleteItem(id) {
        const finder = (item) => item.id === id;
        const indexItem = this._items.findIndex(finder);
        this._items.splice(indexItem, 1);
        return this._items.findIndex(finder) === -1;
    }
}
exports.default = Cart;
