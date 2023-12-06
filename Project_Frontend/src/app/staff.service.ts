import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
 
  private baseURL = "http://localhost:8080/api/library/getAllStaffMemebers";
  private baseURL2 = "http://localhost:8080/api/library/createStaff";
  private baseURL3 = "http://localhost:8080/api/library/getStaffById";
  private baseURL4 = "http://localhost:8080/api/library/staff";
  constructor(private httpClient : HttpClient) { }

  getStaffList(): Observable<Staff[]>{
    return this.httpClient.get<Staff[]>(`${this.baseURL}`);
  }

  createStaff(staff : Staff) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`, staff);
  }

  getStaffById(staff_id : number) : Observable<Staff>{
    return this.httpClient.get<Staff>(`${this.baseURL3}/${staff_id}`);
  }

  updateStaff(staff_id : number, staff : Staff) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL4}/${staff_id}`, staff);
  }

  deleteStaff(staff_id : number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL4}/${staff_id}`);
  }
}
