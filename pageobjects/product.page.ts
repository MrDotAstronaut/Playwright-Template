import { expect, Locator, Page } from '@playwright/test';

export class product{

    readonly page : Page;
    readonly productName : Locator;

    constructor(page : Page){
        this.page = page;
        this.productName = page.locator(".product-wrapper h2");
    }

    async verifyProduct(){
        console.log(await this.productName.textContent());
    }
}