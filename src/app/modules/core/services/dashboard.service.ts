import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SampleList } from "../modals/admin/dashboard.modal";
import { RestService } from "./rest.service";

@Injectable()
export class DashboardService {

    constructor(private restService:RestService) {

    }

    getAll():Observable<SampleList>{
    
        return this.restService.get("/users").pipe(map(data => data));
    }

}