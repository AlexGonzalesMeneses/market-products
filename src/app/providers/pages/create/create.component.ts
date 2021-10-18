import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../../interfaces/provider.interface';
import { ProviderService } from '../../services/provider.service';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [],
})
export class CreateComponent implements OnInit {
  provider: Provider = {
    id: 0,
    name: '',
    lastname: '',
    phone: '',
    email: '',
  };

  constructor(
    private providerService: ProviderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.providerService.getProviderById(id)))
      .subscribe((provider) => (this.provider = provider));
  }

  save() {
    if (this.provider.name.trim().length === 0) {
      return;
    }

    if (this.provider.id) {
      this.providerService
        .updateProvider(this.provider)
        .subscribe((provider) => this.mostrarSnakbar('Registro actualizado'));
    } else {
      this.providerService.postProvider(this.provider).subscribe((provider) => {
        this.router.navigate(['/providers/edit', provider.id]);
        this.mostrarSnakbar('Registro creado');
      });
    }
  }

  borrarHeroe() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.provider,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.providerService
          .deleteProvider(this.provider.id!)
          .subscribe((resp) => {
            this.router.navigate(['/providers']);
          });
      }
    });
  }

  mostrarSnakbar(message: string) {
    this.snackBar.open(message, 'ok!', {
      duration: 2500,
    });
  }
}
