import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Provider } from '../../interfaces/provider.interface';
import { ProviderService } from '../../services/provider.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-providers-table',
  templateUrl: './providers-table.component.html',
  styleUrls: ['./providers-table.component.css']
})
export class ProvidersTableComponent implements OnInit {
  @Input() providers: Provider[] = [];
  @Output() emiter: EventEmitter<string> = new EventEmitter()

  constructor(private providerService: ProviderService,
     private dialog: MatDialog,
     private router: Router) {}

  ngOnInit(): void {}

  emit(){
    this.emiter.emit("reloadList");
  }

  openIn(provider: Provider){
    this,this.router.navigate([`providers/${provider.id}`])
  }

  deleteProvider(provider: Provider){
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: provider,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.providerService
          .deleteProvider(provider.id!)
          .subscribe((resp) => {
            this.emit()
          });
      }
    });
  }

  openDialogEdit(id: any): void{
    const dialogRef = this.dialog.open(DialogEditProvider, {
      width: '400px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.emit()
    });
  }
}


@Component({
  selector: 'dialog-edit-provider',
  templateUrl: 'dialog-edit-provider.html',
})
export class DialogEditProvider implements OnInit{

  provider: Provider = {
    id: 0,
    name: '',
    lastname: '',
    phone: '',
    email: '',
  };


  constructor(
    private router: Router,
    public dialog: MatDialog,
    private providerService: ProviderService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogEditProvider>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }


  ngOnInit(){
    this.providerService.getProviderById(this.data.id)
      .subscribe((provider) => (this.provider = provider));
  }

  cancel(): void {
    this.dialogRef.close();
  }

  edit(){
    if (this.provider.name.trim().length === 0) {
      return;
    }
    this.providerService
    .updateProvider(this.provider)
    .subscribe((provider) => {
      this.openSnackBar('Provider was edited succesfully', "OK")
      this.dialogRef.close()
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
