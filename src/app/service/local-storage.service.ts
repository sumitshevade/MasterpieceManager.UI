import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setValue(key, value){
   localStorage.setItem(key,value)
  }

  getValue(key) {
    if(localStorage.getItem(key)) {
      return localStorage.getItem(key)
    }else {
      return ''
    }
  }
  
  deleteValue(key) {
    localStorage.removeItem(key)
  }



}
