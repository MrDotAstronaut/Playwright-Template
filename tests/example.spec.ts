import {test} from '@playwright/test';
import {POManager} from '../pageobjects/POManager.page';
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")));

for (const data of dataset) {
  test(`Landing with ${data.username}`, async ({ page }) => {

    const pom = new POManager(page);

    const lp = pom.getLandingPage();
    await lp.goto();
    await lp.productClick();

    const pp = pom.getProductPage();
    await pp.verifyProduct();

    console.log(data.username);
    console.log(data.password);

  })
}