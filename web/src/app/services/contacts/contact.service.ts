import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  apiUrl = environment.apiUrl;
  apiRoute = "/contacts/";

  constructor(private http: HttpClient) {}

  getContacts(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiUrl}${this.apiRoute}`);
  }

  getContactById(id: string): Observable<IContact> {
    return this.http.get<IContact>(`${this.apiUrl}${this.apiRoute}${id}`);
  }

  createContact(contact: IContact): Observable<IContact> {
    return this.http.post<IContact>(`${this.apiUrl}${this.apiRoute}`, contact);
  }

  updateContact(id: string, contact: IContact): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}${this.apiRoute}${id}`, contact);
  }

  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.apiRoute}${id}`);
  }
}

export interface IApiResponse {
  result: IContact[];
  total: number;
}

export interface IContact {
  _id?: string;
  firstName: string;
  lastName: string;
  phone: string;
}
