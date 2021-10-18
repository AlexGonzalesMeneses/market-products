import { Component, OnInit } from '@angular/core';
import { Provider } from '../../interfaces/provider.interface';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  providers: Provider[] = [];

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.providerService
      .getProviders()
      .subscribe((providers) => this.providers = providers);
  }
}
