import { Component, OnInit } from '@angular/core';
import { Denomination } from 'src/app/models/denomination';
import { AtmService } from 'src/app/services/atm.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.css']
})
export class RestockComponent implements OnInit {

  public restockDenominations: Denomination[];

  constructor(private atmService: AtmService) {
    this.restockDenominations = [
      {denomination: 100, count: 0},
      {denomination: 50, count: 0},
      {denomination: 20, count: 0},
      {denomination: 10, count: 0},
      {denomination: 5, count: 0},
      {denomination: 1, count: 0},
    ];
  }

  ngOnInit(): void {
  }

  public restock(): void{
    this.atmService.Restock(this.restockDenominations);
  }
}
