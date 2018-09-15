import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { Tab } from '../models/Tab';
import { PostService } from '../../services/post.service';
import { Image } from '../models/Image';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  images: Image[];

  tabs: Tab[];
  activeTab: Tab;
  searchWord: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = [];
    this.tabs = [{name: "Blogs", active: true}, {name: "Images", active: false}];
    this.activeTab = this.tabs[0];
  }

  selectTab(tab: Tab){
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
    this.activeTab = tab;
    this.onSearchWord();
  }

  setSearchWord(searchWord: string)
  {
    this.searchWord = searchWord;
  }

  onSearchWord()
  {
    if (this.activeTab.name == "Blogs")
    {
      this.postService.getPosts(this.searchWord).subscribe(posts => {
        this.posts = posts;
        this.images = [];
      });
    } 
    else 
    {
      this.postService.getImages(this.searchWord).subscribe(images => {
        this.images = images;
        this.posts = [];
      });
    }
  }
}
