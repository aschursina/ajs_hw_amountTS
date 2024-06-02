import Buyable from "../buyable";
import Cart from "../class/cart";

test('test create cart', (): void => {
    const result: Cart = new Cart();

    expect(result).toBeInstanceOf(Cart);
    expect(result).toEqual({_items:[]});
});

test('get cart', () => {
    const cart: Cart = new Cart();
    cart.add({
        id: 1, 
        name: 'Food', 
        price: 200
    });
    expect(cart.items).toEqual([
        {id: 1, 
        name: 'Food', 
        price: 200}
    ]);
});

test('calculate without discount', (): void => {
    const cart: Cart = new Cart();
    cart.add({
        id: 1, 
        name: 'Food', 
        price: 200
    });
    cart.add({
        id: 2, 
        name: 'drink', 
        price: 100
    });
    const result: number = cart.calculateWithoutDiscount();
    expect(result).toBe(300);
});

test('calculate with discount', (): void => {
    const cart: Cart = new Cart();
    cart.add({
        id: 1, 
        name: 'Food', 
        price: 200
    });
    cart.add({
        id: 2, 
        name: 'drink', 
        price: 100
    });
    const result: number = cart.calculateWithDiscount(50);
    expect(result).toBe(150);
});

test('delete cart', (): void => {
    const cart: Cart = new Cart();
    cart.add({
        id: 1, 
        name: 'Food', 
        price: 200
    });
    cart.add({
        id: 2, 
        name: 'drink', 
        price: 100
    });
    expect(cart.deleteItem(1)).toBeTruthy();
    expect(cart.items).toEqual([
        {id: 2, 
        name: 'drink', 
        price: 100}
    ]);
});

