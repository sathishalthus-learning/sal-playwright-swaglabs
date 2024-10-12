import { Locator, Page } from "@playwright/test";

export class ContactPage {
    readonly page: Page;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtPostalCode: Locator;
    readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = page.locator('#first-name');
        this.txtLastName = page.locator('#last-name');
        this.txtPostalCode = page.locator('#postal-code');
        this.btnContinue = page.getByRole('button', { name: 'CONTINUE' });
    }

    async fillContactInfo(contactInfo: string[]) {
        await this.txtFirstName.fill(contactInfo[0]);
        await this.txtLastName.fill(contactInfo[1]);
        await this.txtPostalCode.fill(contactInfo[2]);
        await this.btnContinue.click();
    }
}