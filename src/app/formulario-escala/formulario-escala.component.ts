import { Planilha } from './../model/planilha';
import { PlanilhaService } from './../services/planilha.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { Escala } from '../model/escala';

@Component({
    selector: 'app-formulario-escala',
    templateUrl: './formulario-escala.component.html',
    styleUrls: ['./formulario-escala.component.css']
})


export class FormularioEscalaComponent implements OnInit {
    planilha:Planilha;
    horaEscala: number;
    encarregado: string;
    escalas: Escala[] = [];
    show: boolean;
    constructor(private planilhaService: PlanilhaService) {
    }
    horas: number[] = [4, 5, 6, 7, 8, 9, 10, 12];

    ngOnInit() {
        this.planilha = new Planilha();
    }

    add() {
        console.log(this.verificaCampos());
        if (this.verificar24() && this.verificaCampos()) {
            let _escala = new Escala;
            _escala.encarregado = this.encarregado;
            _escala.horaEscala = this.horaEscala;
            this.escalas.push(_escala);
        }
        if (!this.verificar24()) {
            this.show = true;
        }
    }

    verificaCampos(): boolean {
        try {
            console.log(this.encarregado);
            return this.encarregado.length > 0 && this.encarregado != "";
        } catch (error) {
            return false;
        }

    }

    delete(escalaview: Escala) {
        console.log(escalaview);
        this.escalas.splice(this.escalas.findIndex(item => item.encarregado == escalaview.encarregado && item.horaEscala == escalaview.horaEscala), 1);
        console.log(this.escalas);
        this.show = false;
    }

    verificar24(): boolean {
        let horas24 = 0;
        for (const iterator of this.escalas) {
            console.log(iterator.horaEscala);
            if (iterator.horaEscala == undefined) {
                iterator.horaEscala = 0;
            }
            horas24 += Number(iterator.horaEscala);

        }
        console.log("hora:" + horas24);
        return horas24 < 24;
    }

    save(){
        this.planilha.push(this.escalas);
        this.planilhaService.push(this.planilha);
    }

   
}