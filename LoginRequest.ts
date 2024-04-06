import { Role } from './Role';

export class LoginRequest {
  userId: string;
  password: string;
  role: Role;

  constructor(userId: string, password: string, role: Role) {
    this.userId = userId;
    this.password = password;
    this.role = role;
  }
}