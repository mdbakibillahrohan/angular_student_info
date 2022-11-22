import { Component, OnInit } from '@angular/core';
import { RoughService } from 'src/app/Services/Rough/rough.service';
import { StudentService } from 'src/app/Services/Student/student.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {

  semesters: any;
  shifts: any;
  countries: any;
  tempData: any;

  semester_id = 0;
  shift_id = 0;
  country_id = 0;

  constructor(private rough: RoughService, private student: StudentService) { }

  ngOnInit(): void {
    this.rough.getCountries().subscribe((data) => {
      this.tempData = data;
      this.countries = this.tempData.data;
    });
    this.rough.getSemester().subscribe((data) => {
      this.tempData = data;
      this.semesters = this.tempData.data;
    });
    this.rough.getShifts().subscribe((data) => {
      this.tempData = data;
      this.shifts = this.tempData.data;
    });
  }

  selectSemester(data: any) {
    this.semester_id = data.value;
  }
  selectShift(data: any) {
    this.shift_id = data.value;
  }
  selectCountry(data: any) {
    this.country_id = data.value;
  }

  onStudentFormSubmit(data: any) {
    let name = data.name;
    let email = data.email;

    this.student.addStudent(name, email, this.semester_id, this.shift_id, this.country_id).subscribe((data) => {
      console.log(data);
    })
  }

}

