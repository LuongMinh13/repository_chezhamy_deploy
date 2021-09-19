import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service__data/service__service';
import { IService } from './services__data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private servicesService : ServicesService) { }

  LesServices: IService[] = []

  ngOnInit(): void {
    this.LesServices = this.servicesService.getServices();
  }

}
