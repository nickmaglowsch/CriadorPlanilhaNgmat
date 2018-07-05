import { PlanilhaService } from './../services/planilha.service';
import { Planilha } from './../model/planilha';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-planilhas',
  templateUrl: './view-planilhas.component.html',
  styleUrls: ['./view-planilhas.component.css']
})
export class ViewPlanilhasComponent implements OnInit {

  planilha:Planilha;

  constructor(private planilhaService:PlanilhaService) { }

  ngOnInit() {
    //this.planilha = this.planilhaService.getPlanilha("");
  }

}
