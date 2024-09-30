import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly txtUserName: Locator;
    readonly txtPassWord: Locator;
    readonly btnLogin : Locator;

    constructor(page:Page){
        this.page = page;
        this.txtUserName=page.locator('#user-name');
        this.txtPassWord=page.locator('#password');
        this.btnLogin= page.locator('#login-button');
    }

    async login(){
        await this.txtUserName.fill('standard_user');
        await this.txtPassWord.fill('secret_sauce');
        await this.btnLogin.click();
    }
}