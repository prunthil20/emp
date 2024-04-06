import { AdressDetailsResponse } from './AdressDetailsResponse';

export class UserAllDetails {
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
  userAddressDetailsList: AdressDetailsResponse[] = [];
  constructor(
    user: UserAllDetails,
    personalDetailForm,
    contactDetailsForm,
    addressDetailsForm,
    otherDetailsForm
  ) {
    this.departmentId = otherDetailsForm.controls['department'].value;
    this.designationId = otherDetailsForm.controls['designation'].value;
    this.firstName = personalDetailForm.controls['firstName'].value;
    this.lastName = personalDetailForm.controls['lastName'].value;
    this.userCode = otherDetailsForm.controls['userCode'].value;
    this.email = otherDetailsForm.controls['email'].value;
    this.departmentName = otherDetailsForm.controls['department'].value;
    this.designationName = otherDetailsForm.controls['designation'].value;
    this.primaryContactNumber =
      contactDetailsForm.controls['primaryContactNumber'].value;
    this.secondaryContactNumber =
      contactDetailsForm.controls['secondaryContactNumber'].value;
    this.dateOfBirth = String(
      new Date(
        personalDetailForm.controls['dateOfBirth'].value
      ).toLocaleDateString('en-GB')
    );
    if (user == null) {
      this.userId = null;
      this.userAddressDetailsList.push(
        new AdressDetailsResponse(
          null,
          addressDetailsForm.controls['personalAddress'].value,
          addressDetailsForm.controls['personalCity'].value,
          addressDetailsForm.controls['personalState'].value,
          'p'
        )
      );
      this.userAddressDetailsList.push(
        new AdressDetailsResponse(
          null,
          addressDetailsForm.controls['officeAddress'].value,
          addressDetailsForm.controls['officeCity'].value,
          addressDetailsForm.controls['officeState'].value,
          'o'
        )
      );
    } else {
      this.userId = user.userId;
      const map = new Map<number, string>();
      user.userAddressDetailsList.forEach((element) => {
        map.set(element.id, element.addressType);
      });
      map.forEach((value, key) => {
        if (value === 'p')
          this.userAddressDetailsList.push(
            new AdressDetailsResponse(
              key,
              addressDetailsForm.controls['personalAddress'].value,
              addressDetailsForm.controls['personalCity'].value,
              addressDetailsForm.controls['personalState'].value,
              'p'
            )
          );
        else
          this.userAddressDetailsList.push(
            new AdressDetailsResponse(
              key,
              addressDetailsForm.controls['officeAddress'].value,
              addressDetailsForm.controls['officeCity'].value,
              addressDetailsForm.controls['officeState'].value,
              'o'
            )
          );
      });
    }
  }
}