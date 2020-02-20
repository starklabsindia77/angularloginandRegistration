import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, as) {
        this.formBuilder = formBuilder;
        this.as = as;
        this.registerFormSuper();
    }
    ngOnInit() {
    }
    registerFormSuper() {
        this.registerForm = this.formBuilder.group({
            fullName: ['', Validators.required],
            email: ['', Validators.required],
            mobile: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    register(fullName, email, mobile, password) {
        const rData = {
            fullName,
            email,
            mobile,
            password
        };
        this.as.registerService(rData);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map