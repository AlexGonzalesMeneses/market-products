export interface IPurchaseOrder{
    id?:number;
    orderNumber:string;
    dateBuy:Date;
    stateOrder:string;
    receivedType:string;
    paymentStatus:string;
    totalAmount:number;
    productId:number;
}