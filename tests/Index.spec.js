import { test, expect } from '@playwright/test';
import { IndexPage } from '../pages/IndexPage.js';

test.describe("Index page validation", () => {
    let indexPage;
    test.beforeEach(async ({ page }) => {
        indexPage = new IndexPage(page);
        await indexPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    test("Branding Logo", async () => {
        await indexPage.brand();
    });
});
