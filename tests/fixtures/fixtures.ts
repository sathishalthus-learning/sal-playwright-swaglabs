import { LoginPage } from "../pages/1-login-page";
import { CatalogPage } from "../pages/2-catalog-page";
import { CartPage } from "../pages/3-order-items-page";
import { ContactPage } from "../pages/4-delivery-info-page";
import { OrderPage } from "../pages/5-place-order-page";
import { SuccessPage } from "../pages/6-order-success-page";
import { test as baseTest } from "@playwright/test";

type fixtures = {
  loginPage: LoginPage;
  catalogPage: CatalogPage;
  cartPage: CartPage;
  contactPage: ContactPage;
  orderPage: OrderPage;
  successPage: SuccessPage;
};

export const test = baseTest.extend<fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  catalogPage: async ({ page }, use) => {
    await use(new CatalogPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  orderPage: async ({ page }, use) => {
    await use(new OrderPage(page));
  },
  successPage: async ({ page }, use) => {
    await use(new SuccessPage(page));
  },
});

export { expect } from "@playwright/test";

// fixtures added
