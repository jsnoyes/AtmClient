import { Component, OnInit } from '@angular/core';
import { AtmService } from 'src/app/services/atm.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public chosenService: string;

  constructor(private atmService: AtmService) {
    this.chosenService = this.atmService.atmServiceUrl;
  }

  ngOnInit(): void {
  }

  public ToggleBackendUrl(): void{
    this.chosenService = this.atmService.ToggleBackendUrl();
  }
}
