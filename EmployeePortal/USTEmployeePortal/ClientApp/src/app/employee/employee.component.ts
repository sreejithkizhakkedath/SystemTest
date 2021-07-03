import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  employees: any[];
  ngOnInit() {
    this.service.getAll().subscribe((response: any) => {
      console.log('-----------------');
      console.log(response);
      this.employees = response;
    })
  }

}
