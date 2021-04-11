import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  public History$: Observable<string[]>;
  private historyBS: BehaviorSubject<string[]>;

  private atmServiceUrl: string;

  constructor(private http: HttpClient) {
    this.atmServiceUrl = environment.atmServiceUrl;
    this.historyBS = new BehaviorSubject<string[]>([]);
    this.History$ = this.historyBS.asObservable();
  }

  public GetHistories(): void{
    const sub = this.http.get<string[]>(this.atmServiceUrl + '/history')
      .subscribe(h => {
        this.historyBS.next(h);
        sub.unsubscribe();
      });
  }
}
