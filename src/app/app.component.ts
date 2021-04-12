import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AtmService } from './services/atm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtmClient';
  public MenuItems: MenuItem[];

  constructor(private atmService: AtmService){
    this.atmService.GetHistories();
    this.MenuItems = [
      {
          label: 'Overview',
          routerLink: ['/'],
          icon: 'pi pi-home'
      },
      {
          label: 'Withdraw',
          routerLink: ['/withdraw'],
          icon: 'pi pi-upload'
      },
      {
          label: 'Restock',
          icon: 'pi pi-download',
          routerLink: ['/restock'],
      }
  ];
  }

}
