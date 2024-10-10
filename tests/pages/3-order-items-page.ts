import { Locator, Page } from "@playwright/test";

export class CartPage{
    readonly page:Page;
    readonly btnCheckOut:Locator;


    constructor(page:Page){
        this.page = page;
        this.btnCheckOut=page.getByRole('link', { name: 'CHECKOUT' });

      }

    async checkoutCart() {
        await this.btnCheckOut.click();
    }
    
}