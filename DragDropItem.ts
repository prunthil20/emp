import { UserAllDetails } from './UserAllDetails';
import { UserResponse } from './UserResponse';

export class DragDropItem {
  userId: number;
  firstName: string;
  lastName: string;
  userCode: string;
  email: string;
  dateOfBirth;
  departmentName: string;
  designationName: string;
  primaryContactNumber: number;
  secondaryContactNumber: number;
  designationId: number;
  departmentId: number;
  createdDate: Date;
  isDetailsPresent: boolean;

  constructor(element: UserResponse, user: UserAllDetails) {
    this.userId = element.id;
    this.userCode = element.code;
    this.email = element.email;
    this.departmentId = element.department.id;
    this.designationName = element.designation.name;
    this.designationId = element.designation.id;
    this.departmentName = element.department.name;
    this.designationName = element.designation.name;
    this.createdDate = element.createDateTime;
    this.isDetailsPresent = user === undefined ? false : true;
    this.dateOfBirth = user === undefined ? null : user.dateOfBirth;
    this.firstName = user === undefined ? null : user.firstName;
    this.lastName = user === undefined ? null : user.lastName;
    this.primaryContactNumber =
      user === undefined ? null : user.primaryContactNumber;
    this.secondaryContactNumber =
      user === undefined ? null : user.secondaryContactNumber;
  }
}