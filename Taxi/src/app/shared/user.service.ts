import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class UserService {
  readonly rootUrl = 'https://localhost:44306';

  constructor(public http: HttpClient) { }

  registerUser(user : User,roles:string[]){
    const body = {
      /*UserName: user.UserName,*/
      Password: user.Password,
      Email: user.Email,
      Gender:user.Gender,
      DOB:user.DOB,
      Address:user.Address,
      PhoneNumber:user.PhoneNumber,
      Name:user.Name,
      Roles:roles
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/User/Register', body,{headers : reqHeader});
    
    
}




userAuthentication(userName, password) {
  var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
}

getUserClaims(){
  return  this.http.get(this.rootUrl+'/api/GetUserClaims');
}
getAllRoles() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetAllRoles', { headers: reqHeader });
}

roleMatch(allowedRoles): boolean {
  var isMatch = false;
  var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
  allowedRoles.forEach(element => {
    if (userRoles.indexOf(element) > -1) {
      isMatch = true;
      return false;
    }
  });
  return isMatch;

}
}
