import { HttpClient } from '@angular/common/http' 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }


  postDetails(userData:any){
    return this._http.post('https://jsonplaceholder.typicode.com/posts',userData)
  }

  putDetails(userData:any, userId:any){
    return this._http.put('https://jsonplaceholder.typicode.com/posts/'+ userId, userData)
  }

  patchDetails(userData:any, userId:any){
    return this._http.patch('https://jsonplaceholder.typicode.com/posts/'+ userId,  userData)
  }

  delete(userId:any){
    console.log(userId)
    return this._http.delete('https://jsonplaceholder.typicode.com/posts/'+ userId)
  }
}
