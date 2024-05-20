import { Injectable } from '@angular/core';
import * as data from '../../../database/data.json';
import * as pt from '../../../assets/lang/pt.json';
import * as en from '../../../assets/lang/en.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public mySkills = data.skills;
  public projectDetails = data.projects;
  public workExperienceDetails = data.workExperiences;
  public coursesExperienceDetails = data.coursesExperiences;
  private textsSubject = new BehaviorSubject<any>(pt);
  texts$ = this.textsSubject.asObservable();

  constructor() {}

  setLanguage(lang: string) {
    if (lang === 'pt-br') {
      this.textsSubject.next(pt);
    } else if (lang === 'en-us') {
      this.textsSubject.next(en);
    }
  }
}
