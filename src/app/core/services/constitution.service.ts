import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConstitutionService {

  private constitutionRef: AngularFireList<any>;
  private constitutionRefObject: AngularFireObject<any>;
  private constitution: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.constitutionRef = db.list('/constitution');
    this.constitutionRefObject = db.object('constitution');
    this.constitution = this.constitutionRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
      });
   }

   getAllLaws(): Observable<any[]> {
     return this.constitution;
   }

   getLawById(lawId: number): Observable<any> {
     return this.constitution.map(laws => {
        return laws.filter(law => law.key === lawId);
    });
   }

   private handleError(error: any) {
     if (error instanceof Response) {
       return Observable.throw(error.json()['error'] || `Backend Server Error`);
     }
     return Observable.throw(error || 'Backend Server Error');
   }


}
