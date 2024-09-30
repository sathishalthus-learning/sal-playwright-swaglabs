import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('successful-login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  const loginPage = new LoginPage(page);
  await loginPage.loginAsValidUser();
  const productsPage = new ProductsPage(page);
  expect (await productsPage.getHeading()).toContain('Products');


});
