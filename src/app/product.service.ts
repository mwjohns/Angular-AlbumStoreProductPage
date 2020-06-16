import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AlbumStorePage } from '../../e2e/app.po';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

private _albumUrl;

  constructor(private _http: Http) {
    this._albumUrl = '../assets/AlbumStorePage.json';
   }

   getAlbum(id:number){
     return this._http.get(this._albumUrl).map(x => Response.json());
   }

}


