import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class SucessoService {

    constructor(
        private http: HttpClient
    ) {
    }

    getUser<User>(id: string): Observable<User> {
        return this.http.get<User>(`/api-url/users/${id}`);     
    }
}