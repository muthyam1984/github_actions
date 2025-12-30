import { expect } from "@playwright/test";

class IndexPage {
    constructor(page) {
        this.page = page;
        this.logo = page.getByAltText('company-branding');
    }
    async navigate(url) {
        await this.page.goto(url);
    }
    async brand() {
        return await expect(this.logo).toBeVisible();
    }
}
module.exports = {IndexPage};
