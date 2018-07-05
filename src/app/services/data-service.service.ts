import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private nomeEmpresa = new BehaviorSubject<string>("");
  currentNomeEmpresa = this.nomeEmpresa.asObservable();
  constructor() { }
  
  changeNome(nome:string){
    this.nomeEmpresa.next(nome);
  }
}
