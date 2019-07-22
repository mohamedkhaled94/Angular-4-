export class Book{
    constructor(public ISBN:number, 
        public Title:string,
        public Imageurl : string, 
        public price=99.99, public discountRate = 10){

    }
    likes:number = 0;
    disLikes:number=0;
    calcprice(): number
    {
        let p = this.price * (100-this.discountRate) /100;
        return p;
    }
}