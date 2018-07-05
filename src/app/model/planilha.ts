import { IEscala } from './IEscala';
import { IRow } from "./row";
import { Escala } from "./escala";

export class Planilha {
    row: IRow[] = [];
    nomeEmpresa: string;

    constructor() {

    }

    setNomeEmpresa(nome:string){
        this.nomeEmpresa = nome;
    }

    getNomeEmpresa():string{
        return this.nomeEmpresa;
    }

    push(_: Escala[]) {
        let _row: IRow;
        _row.escala = []
        _row.data = new Date();
        _.forEach(_ => { _row.escala.push(_) });
        _row.totalHorasDia = this.sum(_row.escala);


        this.row.push(_row);
    }

    getPlanilha(): IRow[] {
        return this.row;
    }

    getSingleRow(dia: Date): IRow {
        return this.row.find(x => x.data == dia);
    }

    sum(_:IEscala[]):number{
        let sum:number;
        _.forEach(element => {
            sum += element.horaEscala
        });
        return sum;
    }
}