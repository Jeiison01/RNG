import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http'

@Injectable()

export class ApiServices {

    private API_SERVER = "https://api.thingspeak.com/channels/548625/field/2.json";
    
    constructor (public http:HttpClient){}

    public getApi():Observable<any> {
        
        return this.http.get(this.API_SERVER);
    }
}