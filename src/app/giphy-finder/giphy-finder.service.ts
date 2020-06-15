import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { GiphyModel } from "./giphy-finder.model";

@Injectable({
    providedIn: "root"
})
export class GiphyFinderService {
    constructor(private http: HttpClient) { }

    searchGiphy(text: string): Observable<GiphyModel[]> {
        return this.http.get(
            `https://api.giphy.com/v1/gifs/search?api_key=cp2dt01DkKK2Z287WCONuL8QjdPNNu5C&q=${text}&limit=16&offset=0&rating=G&lang=en`
        ).pipe(
            map((response: any) => {
                return response.data.map((giphy: any) => {
                    return {
                        id: giphy.id,
                        title: giphy.title,
                        image: giphy.images.downsized_large.url
                    };
                });
            }),
            catchError(error => {
                return error;
            })
        );
    }

    getAll(): Observable<GiphyModel[]> {
        return this.http.get(
            "https://api.giphy.com/v1/gifs/trending?api_key=cp2dt01DkKK2Z287WCONuL8QjdPNNu5C&limit=16&rating=G"
        ).pipe(
            map((response: any) => {
                return response.data.map((giphy: any) => {
                    return {
                        id: giphy.id,
                        title: giphy.title,
                        image: giphy.images.downsized_large.url
                    };
                });
            }),
            catchError(error => {
                return error;
            })
        );
    }


}
