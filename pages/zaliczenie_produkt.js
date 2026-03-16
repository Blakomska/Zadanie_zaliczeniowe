import { expect } from "@playwright/test";

export class Produkt { 
    constructor(page) {
        this.page = page;
        this.url = 'https://mad-qa.pl/';

        this.productTitle = this.page.getByTestId('product-title-7');
        this.buyButton = this.page.getByTestId('buy-btn-7');
        this.successAddMessage = this.page.getByText('Dodano do koszyka: Notes QA');
        this.busketButton = this.page.getByTestId('cart-button');
        this.cartBuy = this.page.getByTestId('cart-buy');
        this.cartBuyButton = this.page.getByTestId('cart-buy');
        this.successBuyMessage = this.page.getByText('sukces');

}
}