import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConstitutionService {

  private constitutionRef: AngularFireList<any>;
  private constitution: Observable<any[]>;

  private constitutionPreambleRef: AngularFireList<any>;
  private constitutionPreamble: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.constitutionPreambleRef = db.list('/constitution-preamble');
    this.constitutionPreamble = this.constitutionPreambleRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
      });

    this.constitutionRef = db.list('/constitution');
    this.constitution = this.constitutionRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
      });
   }

   getPreamble(): Observable<any[]> {
     return this.constitutionPreamble;
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
