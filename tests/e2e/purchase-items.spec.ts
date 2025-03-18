import { test, expect } from "../fixtures/fixtures.ts";

test.describe("order-items", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/");
  });

  test("buy a product", async ({ page, loginPage, catalogPage }) => {
    await loginPage.loginToSauceDemo("standard_user", "secret_sauce");
    await page.waitForTimeout(5000);
    expect(await catalogPage.getHeading()).toBe("Products");
  });
});
