import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PageProvider {

  private apiUrl = environment.apiUrl + '/wp-admin/admin-ajax.php?action=';

  constructor(public http: HttpClient) {
  }

  public getPage(slug): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getPage&page=' + slug)
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
