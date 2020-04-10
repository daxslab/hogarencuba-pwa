import {Injectable} from '@angular/core';
import {Location} from './location';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getLocation(id): Observable<Location> {
    return this.http.get<Location>('http://api.hogarencuba.test/v1/locations/' + id)
        .pipe(
            tap(_ => console.log(`Location fetched: ${id}`)),
            catchError(this.handleError<Location>(`Get Location id=${id}`))
        );
  }

  getLocationList(): Observable<Location[]> {
    return this.http.get<Location[]>('http://api.hogarencuba.test/v1/locations')
        .pipe(
            tap(songs => console.log('Locations fetched!')),
            catchError(this.handleError<Location[]>('Get Locations', []))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
