import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  apiBaseUrl = environment.apiBaseUrl;
  apiRoute = "/contacts/";

  constructor(private http: HttpClient) {}

  getContacts(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiBaseUrl}${this.apiRoute}`);
  }

  getContactById(id: string): Observable<IContact> {
    return this.http.get<IContact>(`${this.apiBaseUrl}${this.apiRoute}${id}`);
  }

  createContact(contact: IContact): Observable<IContact> {
    return this.http.post<IContact>(
      `${this.apiBaseUrl}${this.apiRoute}`,
      contact
    );
  }

  updateContact(id: string, contact: IContact): Observable<void> {
    return this.http.put<void>(
      `${this.apiBaseUrl}${this.apiRoute}${id}`,
      contact
    );
  }

  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}${this.apiRoute}${id}`);
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
