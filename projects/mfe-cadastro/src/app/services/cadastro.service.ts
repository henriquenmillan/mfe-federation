import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { concatMap, Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class CadastroService {

    constructor(
        private http: HttpClient
    ) {
    }

    saveNewUser(user: User): Observable<User> {
        return this.http.get<User[]>("/api-url/users").pipe(
            concatMap((users: User[]) => {
                user.id = (users.length + 1).toString();
                return this.http.post<User>("/api-url/users", user);
            })
        );
       
    }
}