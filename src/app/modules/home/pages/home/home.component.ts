import { Component } from '@angular/core';

@Component({
  selector: 'eth-faucet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chains: any = [
    {
      name: 'F1rstChain',
      networks: [{ name: 'Besu', rpcURL: '' }, { name: 'Geth' }],
    },
    { name: 'Polygon', networks: [{ name: 'Mumbai', rpcURL: '' }] },
  ];

  selectedChain: any = '';
  selectedNetwork: any = '';

  changeChain(chain: any) {
    this.selectedNetwork = '';
  }
}
