import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function wait(time: number):Observable<any> {return of([]).pipe(delay(time))};
