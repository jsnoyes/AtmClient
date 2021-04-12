import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public Withdraw(requestedAmount: number): void{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const sub = this.http.post<string>(this.atmServiceUrl + '/withdraw/' + requestedAmount, null,
      { headers, responseType: 'text' as 'json' })
      .subscribe(h => {
        // send toast
        this.GetHistories();
        sub.unsubscribe();
      });
  }
}
