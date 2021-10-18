export interface IPurchaseOrder{
    id?:number;
    orderNumber:string;
    stateOrder:string;
    receivedType:string;
    paymentStatus:string;
    totalAmount:number;
    provider:string;
}