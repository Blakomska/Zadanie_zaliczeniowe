import {test, expect} from '@playwright/test';

import { Zaliczenie } from '../pages/zaliczenie_page';  

test('Zaliczenie - test logowania', async ({ page }) => {

    const zaliczenie = new Zaliczenie(page);
   
    const correctUsername = process.env.USERNAME;
    const correctPassword = process.env.PASSWORD;

    await page.goto(zaliczenie.url);
    await expect(zaliczenie.welcomeMessage).toBeHidden();

    //await zaliczenie.login(correctUsername, correctPassword);

    await zaliczenie.userNameInput.fill(correctUsername);
    await zaliczenie.passwordInput.fill(correctPassword);
    await zaliczenie.zalogujButton.click();

    await expect(zaliczenie.welcomeMessage).toBeVisible();
    await expect(zaliczenie.errorMessage).toBeHidden();
});

