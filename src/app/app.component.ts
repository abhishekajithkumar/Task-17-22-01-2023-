import { Component  } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public userData:any;

  constructor(private _api:ApiService){}

  public postUserId:any;
  public postTitle:any;
  public postBody:any;

  postData(){
    let userData={
      userId: this.postUserId,
      title: this.postTitle,
      body: this.postBody,
    }
    this._api.postDetails(userData).subscribe(response =>{
      console.log('post',response);
    })
  }

  public putId:any;
  public putTitle:any;
  public putBody:any;

  putData(){
    let userData={
      id: this.putId,
      title: this.putTitle,
      body: this.putBody,
    }
    this._api.putDetails(userData,userData.id).subscribe(response =>{
      console.log('put',response);
    })
  }

  public patchId:any;
  public patchTitle:any;
  public patchBody:any;

  patchData(){
    let userData={
      id: this.patchId,
      title: this.patchTitle,
      body: this.patchBody,
    }
    this._api.patchDetails(userData,userData.id).subscribe(response =>{
      console.log('patch',response);
    })
  }

  public deleteId:any;

  deleteData(){
    let userData={
      id: this.deleteId,
    }
    this._api.delete(userData.id).subscribe(response =>{
      console.log('patch',response);
    })
  }

}
