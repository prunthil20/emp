import { FormGroup } from '@angular/forms';

export class Leave {
  leaveDate: string;
  remarks: string;
  userCode: string;
  status = '';
  constructor(applyLeaveForm: FormGroup, userCode) {
    this.remarks = applyLeaveForm.controls['leaveRemark'].value;
    this.userCode = userCode;
    this.leaveDate = String(
      new Date(applyLeaveForm.controls['leaveDate'].value).toLocaleDateString(
        'en-GB'
      )
    );
  }
}