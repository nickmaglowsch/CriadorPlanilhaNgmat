import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empresa:string;

  constructor(private dataServiceService:DataServiceService) { }

  ngOnInit() {
  }

  save(){
    this.dataServiceService.changeNome(this.empresa);
  }

}
