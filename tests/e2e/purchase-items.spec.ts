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

    test('buy a product', async ({ page }) => {
        //
        const loginPage = new LoginPage(page);
        const username: string = 'standard_user';
        const password: string = 'secret_sauce'
        await loginPage.loginToSauceDemo('standard_user', 'secret_sauce');
        //
        const catalogPage = new CatalogPage(page);
        const items: string[] = ['Sauce Labs Backpack'];
        await catalogPage.addItemsToCart(items);
        await catalogPage.verifyCartCount('1');
        await catalogPage.goToCart();
        //
        const cartPage = new CartPage(page);
        await cartPage.checkoutCart();
        //
        const contactInfo=['Rosee','Selva','60000'];
        const contactPage = new ContactPage(page);
        await contactPage.fillContactInfo(contactInfo);
        //
        const orderPage = new OrderPage(page);
        await orderPage.completeOrder();
        //
        const successPage = new SuccessPage(page);
        await successPage.verifySuccessMessage();

    });
});