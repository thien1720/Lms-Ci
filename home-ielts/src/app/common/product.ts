export class Product {
    productId : number;
    productImg : string;
    productTitle: string;
    productImgactive: string;
     
    constructor(productId: number, productImg: string, productTitle: string, productImgactive: string) {
        this.productId = productId;
        this.productImg = productImg;
        this.productTitle = productTitle;
        this.productImgactive = productImgactive;
    }
}
