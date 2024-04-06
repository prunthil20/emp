import { FormGroup } from '@angular/forms';
import { Department } from './Department';
import { Designation } from './Designation';
export class User {
  code: string;
  department: Department;
  designation: Designation;
  email: string;
  adminCode: string;
  constructor(adminCode, userAddFormGroup: FormGroup) {
    this.adminCode = adminCode;
    this.code = userAddFormGroup.controls['userCode'].value;
    this.email = userAddFormGroup.controls['userEmail'].value;
    const department = new Department();
    const designation = new Designation();
    department.id = Number.parseInt(
      userAddFormGroup.controls['userDepartment'].value
    );
    designation.id = Number.parseInt(
      userAddFormGroup.controls['userDesignation'].value
    );
    this.department = department;
    this.designation = designation;
  }
}