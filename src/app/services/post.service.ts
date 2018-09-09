import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../components/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  searchUrl: string = 'http://localhost:8080/api/items/text';

  constructor(private http: HttpClient) { }

  getPosts(search: string) : Observable<Post[]> 
  {
    const url = `${this.searchUrl}/${search}`;
    return this.http.get<Post[]>(url);
  }
}
