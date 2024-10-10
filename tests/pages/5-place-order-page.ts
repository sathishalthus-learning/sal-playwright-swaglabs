import { Locator, Page } from "@playwright/test";

export class OrderPage {
        readonly page:Page;
        readonly btnFinish:Locator;

        constructor(page:Page){
                this.page=page;
                this.btnFinish=page.getByRole('link', { name: 'FINISH' });
        }

        async completeOrder(){
                await this.btnFinish.click();
        }

}
