import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly txtUserName: Locator;
    readonly txtPassWord: Locator;
    readonly btnLogin: Locator;
    readonly msgLockedOut: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtUserName = page.locator('#user-name');
        this.txtPassWord = page.locator('#password');
        this.btnLogin = page.locator('#login-button');
        this.msgLockedOut = page.locator('//h3');
    }

    async loginToSauceDemo(username: string, password: string) {
        await this.txtUserName.fill(username);
        await this.txtPassWord.fill(password);
        await this.btnLogin.click();
    }

    async getLockedOutMessage(): Promise<string> {
        return await this.msgLockedOut.innerText();
    }

}