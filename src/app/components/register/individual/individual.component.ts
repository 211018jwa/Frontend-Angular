import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApplicantService } from 'src/app/services/applicant.service';
import { Applicant } from '../../../classes/applicant';

@Component({
  selector: 'app-individual',
  templateUrl:'./individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit{

  constructor(private service: ApplicantService) { }

  employmentStatuses = ['Employed','Unemployed','Self-Employed','Retired','Student','Other']
  educationLevels = ['High School','Associate Degree','Bachelor Degree','Master Degree','PhD']
  educationFields = ['Computer Science','Mathematics','Physics','Chemistry','Biology','Other']
  submitted = false;
  model = new Applicant(
    undefined, 'I am a cool person that likes to hang...',
    this.educationLevels[0],this.educationFields[0],this.employmentStatuses[0]);
    
  ngOnInit() {}

  onSubmit(): void {
    this.submitted = true;
  }



}
