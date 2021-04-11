import { Component } from '@angular/core';
import { AtmService } from './services/atm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtmClient';

  constructor(private atmService: AtmService){
    this.atmService.GetHistories();
  }

}
