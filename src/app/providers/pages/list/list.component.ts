import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Provider } from '../../interfaces/provider.interface';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  providers: Provider[] = [];

  constructor(private providerService: ProviderService,
    public dialog: MatDialog,) {}

  ngOnInit(): void {
   this.loadProviders()
  }

  loadProviders(){
    this.providerService
    .getProviders()
    .subscribe((providers) => this.providers = providers);
  }

  openDialogCreate():void {
    const dialogRef = this.dialog.open(DialogCreateProvider, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadProviders()
    });
  }
}

@Component({
  selector: 'dialog-new-provider',
  templateUrl: 'dialog-new-provider.html',
})
export class DialogCreateProvider implements OnInit {
  provider: Provider = {
    id: 0,
    name: '',
    lastname: '',
    phone: '',
    email: '',
  };
  
  constructor(
    private providerService: ProviderService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogCreateProvider>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit(){
    
  }

  cancel(): void {
    this.dialogRef.close();
  }

  create(){
    this.providerService.postProvider(this.provider).subscribe((provider) => {
      this.cancel()
      this.openSnackBar('Provider was created successfull',"Ok");
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
