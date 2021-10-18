import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestService } from './rest.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogNewPromotion, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}

@Component({
  selector: 'dialog-new-promotion',
  templateUrl: 'modal-new-promotion.html',
})
export class DialogNewPromotion implements OnInit{

  promotion = {
    title: "",
    idItem: -1,
    cantidad: 0,
    dateIni: '',
    dateEnd: ''
  }
  
  public ListaProducts:any = [];


  constructor(
    private restService: RestService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogNewPromotion>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }


  ngOnInit(){
    this.cargarData();
  }

  public cargarData(){
    this.restService.get('http://localhost:3000/products')
    .subscribe(respuesta =>{
      this.ListaProducts = respuesta;
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

  create(){
    this.restService.post(`http://localhost:3000/promotions`,{     
      namePromotion: this.promotion.title,
      idItem: this.promotion.idItem,
      discountRate: this.promotion.cantidad,
      iniDate:this.promotion.dateIni ,
      endDate: this.promotion.dateEnd
    }
    ).subscribe(respuesta =>{
      this.dialogRef.close()
      this.openSnackBar("Promotion was created","OK");
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
