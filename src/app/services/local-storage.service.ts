import { Injectable } from '@angular/core';
 import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setData(key: string, data: SocialUser): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Retrieve data from localStorage
  getData(key: string): SocialUser  |  null{
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Remove data from localStorage
  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
