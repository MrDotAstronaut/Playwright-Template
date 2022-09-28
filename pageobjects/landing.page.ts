import {Locator, Page} from '@playwright/test';

export class landing{

    readonly page : Page;
    readonly product : Locator;

    constructor(page : Page){
        this.page = page;
        this.product = page.locator("//div[@class='col-12 col-lg-8']//div[2]//a//div");
    }

    async goto(){
        await this.page.goto("https://onlineboutique.dev/");
    }

    async productClick(){
        await this.product.click();
    }
}