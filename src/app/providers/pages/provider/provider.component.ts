import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Provider } from '../../interfaces/provider.interface';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styles: [],
})
export class ProviderComponent implements OnInit {
  provider!: Provider;

  constructor(
    private activatedRoute: ActivatedRoute,
    private providerService: ProviderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.providerService.getProviderById(id)))
      .subscribe((provider) => (this.provider = provider));
  }

  back() {
    this.router.navigate(['/providers/list']);
  }
}
