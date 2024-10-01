import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly pageHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('.product_label', { hasText: 'Products' })
    }

    async getHeading(): Promise<string> {
        const actualHeading = await this.pageHeading.innerText();
        return actualHeading;
    }

    async getProblem(): Promise<boolean> {
        
        return true;
    }
}