import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, as) {
        this.formBuilder = formBuilder;
        this.as = as;
        this.loginFormSuper();
    }
    loginFormSuper() {
        this.loginForm = this.formBuilder.group({
            mobile: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    ngOnInit() {
    }
    login(mobile, password) {
        const data = {
            mobile,
            password
        };
        this.as.loginService(data);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map