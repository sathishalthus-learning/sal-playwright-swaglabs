import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';


test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');

  });

  test('standard-user', async ({ page }) => {
    // arrange
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const expectedHeading = 'Products';
    // act
    await loginPage.loginToSauceDemo('standard_user', 'secret_sauce');
    // assert
    expect(await productsPage.getHeading()).toContain(expectedHeading);
  });

  test('locked-out-user', async ({ page }) => {
    // arrange
    const loginPage = new LoginPage(page);
    const expectedErrorMessage = 'Epic sadface: Sorry, this user has been locked out.';
    // act
    await loginPage.loginToSauceDemo('locked_out_user', 'secret_sauce');
    // assert
    expect(await loginPage.getLockedOutMessage()).toContain(expectedErrorMessage);
  });

  test('problem-user', async ({ page }) => {
    // arrange
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const problemValue = true;
    // act
    await loginPage.loginToSauceDemo('problem_user', 'secret_sauce');
    // assert
    expect(productsPage.getProblem);
  });

  // describe
});
