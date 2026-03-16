import { expect } from "@playwright/test";

export class Zaliczenie {
    constructor(page) {
        this.page = page;
        this.url = 'https://mad-qa.pl/';
        this.welcomeMessage = this.page.getByTestId('welcome-msg');
        this.zalogujButton = this.page.getByRole('button', { name: 'Zaloguj' });
        this.wylogujButton = this.page.getByRole('button', { name: 'Wyloguj' });
        this.userNameInput = this.page.getByTestId('login-username');
        this.passwordInput = this.page.getByTestId('login-password');
        this.errorMessage = this.page.getByTestId('login-error');


    }

    async navigateTo() {
        await this.page.goto(this.url);
    };

    /*async login(correctUsername, correctPassword) {


        await this.userNameInput.fill(correctUsername);
        await this.passwordInput.fill(correctPassword);
        await this.zalogujButton.click();
    }*/


}

module.exports = { Zaliczenie };