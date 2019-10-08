import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
