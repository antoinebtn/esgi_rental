import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiUrl = 'http://localhost:3000/api';
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        const localStorageUser = this.getLocalStorageUser();
        this.currentUserSubject = new BehaviorSubject<any>(localStorageUser);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    private getLocalStorageUser(): any {
        if (typeof window !== 'undefined' && window.localStorage) {
            return JSON.parse(localStorage.getItem('currentUser')!);
        }
        return null;
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
        .pipe(tap(user => {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            this.currentUserSubject.next(user);
        }));
    }

    register(email: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/register`, { email, password });
    }

    logout(): void {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem('currentUser');
        }
        this.currentUserSubject.next(null);
    }

    isAuthenticated(): boolean {
        return !!this.currentUserValue;
    }

    getDecodedToken(): any {
        const user = this.getLocalStorageUser();
        if (user && user.token) {
            return jwtDecode(user.token);
        }
        return null;
    }

    getUserIdFromToken(): number | null {
        const decodedToken = this.getDecodedToken();
        return decodedToken ? decodedToken.id : null;
    }
}
