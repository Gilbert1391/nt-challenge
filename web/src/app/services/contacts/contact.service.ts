import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>("http://localhost:3000/contacts");
  }

  getContactById(id: string): Observable<IContact> {
    return this.http.get<IContact>(`http://localhost:3000/contacts/${id}`);
  }

  createContact(contact: IContact): Observable<IContact> {
    return this.http.post<IContact>("http://localhost:3000/contacts", contact);
  }

  updateContact(id: string, contact: IContact): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/contacts/${id}`, contact);
  }

  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/contacts/${id}`);
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
