import { Department } from './Department';
import { Designation } from './Designation';

export class UserResponse {
  id: number;
  code: string;
  department: Department;
  designation: Designation;
  email: string;
  password: string;
  createDateTime: Date;
  updateDateTime: Date;
}