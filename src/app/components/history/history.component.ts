import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AtmService } from 'src/app/services/atm.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {

  public History$: Observable<string[]>;

  constructor(private atmService: AtmService) {
    this.History$ = this.atmService.History$;
  }

  ngOnInit(): void {

  }

}
