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
}

export interface IApiResponse {
  result: IContact[];
  total: number;
}

export interface IContact {
  firstName: string;
  lastName: string;
  phone: string;
}
