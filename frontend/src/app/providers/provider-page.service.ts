import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PageProvider {

  private apiUrl = 'api';

  constructor(public http: HttpClient) {
    console.log('Hello PageProvider');
  }

  public getPage(slug): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/pages/' + slug)
      .subscribe(data => {
        resolve(data);
      },
      err => {
        console.log(err);
        resolve(err);
      });
    });
  }
}
