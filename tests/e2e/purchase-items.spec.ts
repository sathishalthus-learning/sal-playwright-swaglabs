import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/1-login-page";
import { CatalogPage } from "../pages/2-catalog-page";
import { CartPage } from "../pages/3-order-items-page";
import { ContactPage } from "../pages/4-delivery-info-page";
import { OrderPage } from "../pages/5-place-order-page";
import { SuccessPage } from "../pages/6-order-success-page";
import { describe } from "node:test";

describe('order-items', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/');


    });

    test('order single item', async ({ page }) => {
        //arrange

        const catalogPage = new CatalogPage(page);
        const cartPage = new CartPage(page);
        const contactPage = new ContactPage(page);
        const orderPage = new OrderPage(page);
        const successPage = new SuccessPage(page);

        // act
        const loginPage = new LoginPage(page);
        const username: string = 'standard_user';
        const password: string = 'secret_sauce'
        loginPage.loginToSauceDemo('standard_user', 'secret_sauce');

        const items: string[] = ['Sauce Labs Backpack'];
        catalogPage.addItemsToCart(items);
        catalogPage.verifyCartCount('1');
        catalogPage.goToCart();

        cartPage.checkoutCart();
        const contactInfo=['Rosee','Selva','60000'];
        contactPage.fillContactInfo(contactInfo);

        orderPage.completeOrder();
        
        //assert
        successPage.verifySuccessMessage();

    });
});