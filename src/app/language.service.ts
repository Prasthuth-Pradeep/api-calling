
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }


  getData(){
    let url= "https://ohtzdevogb.execute-api.eu-west-2.amazonaws.com/test/languagecode-list/ltn";
    return this.http.get<any>(url);
  }

}