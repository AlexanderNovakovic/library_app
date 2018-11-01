import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-with-email/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
    {
        path: 'login',
        children: [
            {
                path: 'with-email',
                component: LoginComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'reset-password/:token',
                component: ResetPasswordComponent
            },
            {
                path: 'create-account',
                component: CreateAccountComponent,
                data: {},
                resolve: {}
            }
        ]
    }
];
