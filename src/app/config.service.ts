import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigData } from './configData';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  private _url: any = 'assets/data/homeData.json';
  private _experienceUrl: string = 'assets/data/experienceData.json';
  private _contactURL: string = "assets/data/contactData.json";

  constructor(private http: HttpClient) { }

  getData(): Observable<ConfigData[]>
  {
    return this.http.get<ConfigData[]>(this._url);
  }
  getExperienceData(): Observable<ConfigData[]>
  {
    return this.http.get<ConfigData[]>(this._experienceUrl);
  }
  getContactData(): Observable<ConfigData[]>
  {
    return this.http.get<ConfigData[]>(this._contactURL);
  }
}
