import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList,
         AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArrestService {

  private criminalsRef: AngularFireList<any>;
  private criminalsRefObject: AngularFireObject<any>;
  private criminals: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.criminalsRef = db.list('/criminals');
    this.criminalsRefObject = db.object('criminals');
    this.criminals = this.criminalsRef.snapshotChanges().map(changes => {
        return changes.map(change => ({
            key: change.payload.key,
            ...change.payload.val() }));
        });
   }

   getAllCriminals(): Observable<any[]> {
     return this.criminals;
   }

   getCriminalById(criminalId): Observable<any> {
     return this.criminals.map(criminals => {
       return criminals.filter(criminal => criminal.key === criminalId);
     });
   }

   private handleError(error: any) {
     if (error instanceof Response) {
       return Observable.throw(error.json()['error'] || `Backend Server Error`);
     }
     return Observable.throw(error || 'Backend Server Error');
   }

}
