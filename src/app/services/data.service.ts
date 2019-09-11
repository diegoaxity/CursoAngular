import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loading = new Subject<boolean>();

  constructor() { }

  setIsLoading(load: boolean) {
    this.loading.next(load);
  }

  getIsLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
