import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { getQueryPredicate } from "@angular/compiler/src/render3/view/util";
import { query } from "@angular/animations";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PruebaService {
    constructor(private http: HttpClient) {}
        getQuery(): Observable <any>{
            // const headers = new HttpHeaders({
            //     Authorization :  'Bearer '
            // });

            const url = "https://jsonplaceholder.typicode.com/posts";

            return this.http.get<any>(url);
        }

        // getNewPosts() {
        //     return this.getQuery('posts').pipe(map(data => {
        //         return data['posts'];
        //     }))
        // }
    
}