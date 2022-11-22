import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: object[] = [
    {
      sl: 1,
      name: "Rohan",
      semester: "8th",
      shift: "1st",
      country: "Bangladesh"
    },
    {
      sl: 2,
      name: "Maruf",
      semester: "8th",
      shift: "1st",
      country: "Bangladesh"
    },
    {
      sl: 3,
      name: "Alamin",
      semester: "8th",
      shift: "1st",
      country: "Bangladesh"
    },
    {
      sl: 4,
      name: "Rahul",
      semester: "8th",
      shift: "1st",
      country: "Bangladesh"
    },
    {
      sl: 5,
      name: "Suronjeet",
      semester: "8th",
      shift: "1st",
      country: "Bangladesh"
    },
    {
      sl: 6,
      name: "Hamja",
      semester: "8th",
      shift: "1st",
      country: "Bangladesh"
    },
  ];

  displayedColumns: string[] = ['sl', 'name', 'semester', 'shift', 'country'];
  constructor() { }

  ngOnInit(): void {
  }

}
