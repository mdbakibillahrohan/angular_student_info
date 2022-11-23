import { Component, OnInit } from '@angular/core';
import { RoughService } from 'src/app/Services/Rough/rough.service';
import { StudentService } from 'src/app/Services/Student/student.service';
import Swal from 'sweetalert2';

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


  // errors variable
  nameError: boolean = false;
  nameErrorMessage: string = "";

  emailError = false;
  emailErrorMessage = "";

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
    console.log("semester id ", this.semester_id);
  }
  selectShift(data: any) {
    this.shift_id = data.value;
    console.log("shift id ", this.shift_id,)
  }
  selectCountry(data: any) {
    this.country_id = data.value;
    console.log("country id ", this.country_id,)
  }

  onStudentFormSubmit(data: any) {
    let name = data.name;
    let email = data.email;

    if (name == "") {
      this.nameError = true;
      this.nameErrorMessage = "Name is required";
    }
    if (email == "") {
      this.emailError = true;
      this.emailErrorMessage = "Email is required";
    }

    if (name != "" && email != "") {

      this.student.addStudent(name, email, this.semester_id, this.shift_id, this.country_id).subscribe((data) => {
        this.tempData = data;
        console.log(this.tempData);

        if (this.tempData.message = "success") {

          Swal.fire(
            'Good Job!',
            'Successfully added student to database!',
            'success'
          )
        }
      }, (err) => {
        console.log(err.error.message);
        if (err.error.message == "Email already exist (email)") {
          console.log("yes got error")
          this.emailError = true;
          this.emailErrorMessage = "This email address already exist";
        }
      })
    }

  }

}

