import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eth-faucet';

  chains: any = [
    {
      name: 'F1rstChain',
      networks: [{ name: 'Besu', rpcURL: '' }, { name: 'Geth' }],
    },
    { name: 'Polygon', networks: [{ name: 'Mumbai', rpcURL: '' }] },
  ];

  selectedChain: any = '';
  selectedNetwork: any = '';

  ngOnInit(): void {
    initFlowbite();
  }

  changeChain(chain: any) {
    this.selectedNetwork = '';
  }
}
