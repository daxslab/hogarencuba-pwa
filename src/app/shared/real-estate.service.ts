import {Injectable} from '@angular/core';
import {RealEstate} from './real-estate';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class RealEstateService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {
    }

    getRealEstate(id): Observable<RealEstate> {
        return this.http.get<RealEstate>('http://api.hogarencuba.test/v1/real-estates/' + id + '?expand=images')
            .pipe(
                tap(_ => console.log(`RealEstate fetched: ${id}`)),
                catchError(this.handleError<RealEstate>(`Get RealEstate id=${id}`))
            );
    }

    getRealEstateList(): Observable<RealEstate[]> {
        return this.http.get<RealEstate[]>('http://api.hogarencuba.test/v1/real-estates?fields=id,title,shortDescription,bedroomsCount,bathroomsCount,garageCount,poster,location')
            .pipe(
                tap(songs => console.log('Real Estates fetched!')),
                catchError(this.handleError<RealEstate[]>('Get Real Estates', []))
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
