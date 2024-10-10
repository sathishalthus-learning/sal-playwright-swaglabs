import { expect, Locator, Page } from "@playwright/test";

export class CatalogPage {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly cartIcon: Locator;
    readonly cartCountLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('.product_label', { hasText: 'Products' });
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartCountLabel = page.locator('#shopping_cart_container');

    }

    async getHeading(): Promise<string> {
        const actualHeading = await this.pageHeading.innerText();
        return actualHeading;
    }

    async getProblem(): Promise<boolean> {
        return true;
    }

    async addItemsToCart(items: string[]): Promise<void> {

        items.forEach(async (item) => {
            // await this.page.locator('.inventory_item').filter({hasText:item}).getByRole('button').click();
            await this.page.locator('xpath=//div[text()="Sauce Labs Backpack"]/ancestor::div[@class="inventory_item"]//button').click();
        });

    }

    async goToCart(): Promise<void> {
        await this.cartIcon.click();
    }

    async verifyCartCount(count: string): Promise<boolean> {
        await expect(this.cartCountLabel).toHaveText('1');
        return true;
    }

}