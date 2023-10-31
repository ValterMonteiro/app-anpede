import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { AssociadoDTO } from "src/app/models/AssociadoDTO";


@Injectable()
export class AssociadoService {

    constructor(public http: HttpClient){

    }

    insert(associado: AssociadoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/associados`, associado, {
            observe: 'response', responseType: 'text'
        });
    }
}
