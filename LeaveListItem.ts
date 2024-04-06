export class LeaveListItem {
  leaveId: number;
  leaveDate: Date;
  leaveStatus: string;
  leaveRemark: string;
  userId: number;
  userCode: string;
  userFirstName: string;
  userLastName: string;
  constructor(
    leaveId,
    leaveDate,
    leaveStatus,
    leaveRemark,
    userId,
    userCode,
    userFirstName,
    userLastName
  ) {
    this.leaveId = leaveId;
    this.leaveDate = leaveDate;
    this.leaveRemark = leaveRemark;
    this.leaveStatus = leaveStatus;
    this.userId = userId;
    this.userCode = userCode;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
  }
}