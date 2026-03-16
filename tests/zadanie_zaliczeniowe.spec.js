import { test, expect } from '@playwright/test';

import { Zaliczenie } from '../pages/zaliczenie_page';

import { Produkt } from '../pages/zaliczenie_produkt';

test('Zaliczenie - test logowania', async ({ page }) => {

    const zaliczenie = new Zaliczenie(page);

    const correctUsername = process.env.USER_NAME;
    const correctPassword = process.env.USER_PASSWORD;

    await page.goto(zaliczenie.url);
    await expect(zaliczenie.welcomeMessage).toBeHidden();

    //await zaliczenie.login(correctUsername, correctPassword);

    await zaliczenie.userNameInput.type(correctUsername);
    await zaliczenie.passwordInput.type(correctPassword);
    await zaliczenie.zalogujButton.click();

    await expect(zaliczenie.welcomeMessage).toBeVisible();
    await expect(zaliczenie.errorMessage).toBeHidden();
});

test('Wybranie produktu i dodanie do koszyka', async ({ page }) => {

    const produkt = new Produkt(page);

    await page.goto(produkt.url);
    await expect(produkt.productTitle).toBeVisible();
    await produkt.productTitle.click();
    await expect(produkt.buyButton).toBeVisible();
    await produkt.buyButton.click();
    
    await expect(produkt.successAddMessage).toBeVisible();
    await produkt.busketButton.click();
    await expect(produkt.cartBuy).toBeVisible();
    await produkt.cartBuyButton.click();
    await expect(produkt.successBuyMessage).toBeVisible();
});

