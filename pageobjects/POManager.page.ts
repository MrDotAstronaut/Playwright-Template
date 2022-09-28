import {Page} from '@playwright/test';
import {landing} from './landing.page';
import {product} from './product.page';

export class POManager{
    
    readonly page : Page;
    readonly lp : landing;
    readonly pp : product;

    constructor(page : Page){
        
        this.page = page;
        this.lp = new landing(this.page);
        this.pp = new product(this.page);

    }

    getLandingPage(){
        return this.lp;
    }

    getProductPage(){
        return this.pp;
    }
}