import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-post',
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.scss']
})
export class InstagramPostComponent implements OnInit {
  @Input() item: any;


  constructor() { }

  ngOnInit() {
  }

}
