import { expect, Locator, Page } from "@playwright/test";

export class SuccessPage{
    readonly page:Page;
    readonly txtOrderSuccess:Locator;
    readonly imgPonyExpress:Locator;

    constructor(page:Page){
        this.page=page;
        this.imgPonyExpress=page.locator('#checkout_complete_container').getByRole('img');
        this.txtOrderSuccess=page.getByRole('heading');
    }

    async verifySuccessMessage(){
        await expect(this.imgPonyExpress).toBeVisible();
        await expect(this.txtOrderSuccess).toHaveText('THANK YOU FOR YOUR ORDER');
    }
}