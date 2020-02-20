import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.uri = 'http://localhost:4000/api/user';
    }
    loginService(data) {
        console.log(data);
        this.http.post('http://localhost:4000/api/user/login', data, httpOptions).subscribe(tap((result) => this.save_token(result)), catchError(this.handleError('loginService')));
    }
    handleError(_operation = 'operation', result) {
        return (_error) => {
            return of(result);
        };
    }
    save_token(newData) {
        if (newData.success) {
            localStorage.setItem('token', newData.token);
            return;
        }
        console.log(newData.token);
    }
    registerService(rData) {
        let obj = {
            name: rData.fullName,
            email: rData.email,
            mobile: rData.mobile,
            password: rData.password
        };
        console.log(obj);
        this.http.post('http://localhost:4000/api/user/register', obj, httpOptions).subscribe(_res => {
            console.log('Done');
            this.router.navigate(['/login']);
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map