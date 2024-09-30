import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';

test('verify successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  const loginPage = new LoginPage(page);
  await loginPage.login();
  const productsPage = new ProductsPage(page);
  await productsPage.verifyHeading();


});
