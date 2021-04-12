import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Denomination } from 'src/app/models/denomination';
import { AtmService } from 'src/app/services/atm.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public overview$: Observable<Denomination[]>;

  constructor(private atmService: AtmService) {
    this.overview$ = this.atmService.Denominations$;
   }

  ngOnInit(): void {
    this.atmService.GetOverview();
  }

}
