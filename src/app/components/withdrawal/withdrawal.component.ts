import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AtmService } from 'src/app/services/atm.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  public requestedAmount: number;
  public withdrawalProcessing$: Observable<boolean>;

  constructor(private atmService: AtmService) {
    this.withdrawalProcessing$ = this.atmService.WithdrawalProcessing$;
    this.requestedAmount = 0;
    this.atmService.GetHistories();
  }

  ngOnInit(): void {
  }

  public withdraw(): void{
    this.atmService.Withdraw(this.requestedAmount);
    this.requestedAmount = 0;
  }
}
