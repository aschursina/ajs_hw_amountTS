import Buyable from '../buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateWithoutDiscount(): number {
        return this._items.reduce((total: number, item: Buyable): number => total + item.price, 0);
    }

    calculateWithDiscount(discount: number): number {
        return this._items.reduce((total: number, item: Buyable): number => total + (item.price * (discount / 100)), 0);
    }

    deleteItem(id: number): boolean {
        const finder = (item: Buyable): boolean => item.id === id;
        const indexItem: number = this._items.findIndex(finder);
        this._items.splice(indexItem, 1);
        return this._items.findIndex(finder) === -1;
    }
}