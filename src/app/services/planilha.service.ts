import { Planilha } from './../model/planilha';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlanilhaService {

    planilhas: Planilha[] = [];
    constructor() { }

    push(_: Planilha) { this.planilhas.push(_); }

    getPlanilhas(): Planilha[] { return this.planilhas; }

    getPlanilha(nomeEmpresa: string): Planilha {
        return this.planilhas.find(planilha => planilha.nomeEmpresa == nomeEmpresa);
    }
}
