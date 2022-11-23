import { Component, OnInit } from '@angular/core';
import { RoughService } from 'src/app/Services/Rough/rough.service';
import { StudentService } from 'src/app/Services/Student/student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: any = [];
  countries: any = [];
  shifts: any = [];
  semesters: any = [];
  tempData: any;

  students1 = [
    {
      student_name: "Rohan",
      sl_no: 1,
      shift: "1st",
      semester: "1st",
      country: "Bangldesh"
    },
    {
      student_name: "Rohan",
      sl_no: 2,
      shift: "1st",
      semester: "1st",
      country: "Bangldesh"
    },
    {
      student_name: "Rohan",
      sl_no: 3,
      shift: "1st",
      semester: "1st",
      country: "Bangldesh"
    },
    {
      student_name: "Rohan",
      sl_no: 1,
      shift: "1st",
      semester: "1st",
      country: "Bangldesh"
    },
  ];
  constructor(private studentService: StudentService, private roughService: RoughService) { }
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
    this.roughService.getCountries().subscribe((data) => {
      this.tempData = data;
      this.countries = this.tempData.data;
    })
    this.roughService.getSemester().subscribe((data) => {
      this.tempData = data;
      this.semesters = this.tempData.data;
      console.log(this.semesters);
    })
    this.roughService.getShifts().subscribe((data) => {
      this.tempData = data;
      this.shifts = this.tempData.data;
    });
    this.studentService.getStudents().subscribe((data) => {
      this.addDataToStudents(data);
    })
  }


  addDataToStudents(data: any) {
    let sl = 1;
    data.forEach((element: any) => {
      let semester = this.semesters.filter((semester: any) => {
        return semester.id == element.semester_id;
      });
      let shift = this.shifts.filter((shift: any) => {
        return shift.id == element.shift_id;
      });
      let country = this.countries.filter((country: any) => {
        return country.id == element.country_id;
      });
      let tempElement = { ...element, shift: shift[0].shift_name, semester: semester[0].semester_name, country: country[0].country_name, sl_no: sl };
      this.students.push(tempElement);
      sl++;
    });


  }



}
