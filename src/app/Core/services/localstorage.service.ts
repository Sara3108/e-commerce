import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  
  private setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private getItem(key) {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch (e) {
      return false;
    }
  }

  setLanguage(language) {
    this.setItem('8AD37A39EE68FA4220602CD4D3D01FE4', language);
  }

  getLanguage() {
    return this.getItem('8AD37A39EE68FA4220602CD4D3D01FE4');
  }

  setCurrentUser(user) {
    this.setItem('8AD37A39EE68FASAS88A602CD4D3D01FE4', user);
  }

  getCurrentUser() {
    return this.getItem('8AD37A39EE68FASAS88A602CD4D3D01FE4');
  }

  clearCurrentUser(){
    localStorage.removeItem('8AD37A39EE68FASAS88A602CD4D3D01FE4');
  }

}
