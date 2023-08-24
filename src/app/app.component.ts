import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eth-faucet';
  selectedChain: any = '';
  chains: any = [
    {
      name: 'F1rstChain',
      icon: '',
      networks: [{ name: 'Besu', rpcURL: '' }, { name: 'Geth' }],
    },
    { name: 'Polygon', icon: '', networks: [{ name: 'Mumbai', rpcURL: '' }] },
  ];
  selectedNetwork: any = '';

  ngOnInit(): void {
    initFlowbite();
  }
}
