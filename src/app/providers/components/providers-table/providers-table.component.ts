import { Component, Input, OnInit } from '@angular/core';
import { Provider } from '../../interfaces/provider.interface';

@Component({
  selector: 'app-providers-table',
  templateUrl: './providers-table.component.html',
  styles: [
    `
      tr {
        cursor: pointer;
      }
    `,
  ],
})
export class ProvidersTableComponent implements OnInit {
  @Input() providers: Provider[] = [];
  constructor() {}

  ngOnInit(): void {}
}
