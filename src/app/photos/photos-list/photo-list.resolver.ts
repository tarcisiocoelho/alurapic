import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs";

import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Injectable({providedIn: 'root'})
//Implementando o Resolve precisa definir o tipo que ele vai retornar no final que no caso é o Observable de Photo
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

  //Importando o service com a lógica de retorno de photos
  constructor(private service: PhotoService){}

  //Recebendo o que acontece com a rota no momento
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const userName = route.params.userName;
    return this.service.listFromUserPaginated(userName, 1);
  }

}
