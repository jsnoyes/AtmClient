import { Component, OnInit } from '@angular/core';
import { AtmService } from 'src/app/services/atm.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  public requestedAmount: string;

  constructor(private atmService: AtmService) {
    this.requestedAmount = '';
    this.atmService.GetHistories();
  }

  ngOnInit(): void {
  }

  public withdraw(): void{
    this.atmService.Withdraw(parseInt(this.requestedAmount, 10));
  }
}
