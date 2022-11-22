import { Component, OnInit } from '@angular/core';
import { RoughService } from 'src/app/Services/Rough/rough.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }
  filter: any[] = [
    {
      name: "Semester",
      value: "semester"
    },
    {
      name: "Shift",
      value: "shift"
    },
    {
      name: "Country",
      value: "shift"
    },
  ];
  ngOnInit(): void {

  }



}
