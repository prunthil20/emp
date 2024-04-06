export class AdressDetailsResponse {
  id: number;
  address: string;
  cityName: string;
  stateName: string;
  addressType: string;
  constructor(id, address, cityName, stateName, addressType) {
    this.id = id;
    this.address = address;
    this.cityName = cityName;
    this.stateName = stateName;
    this.addressType = addressType;
  }
}