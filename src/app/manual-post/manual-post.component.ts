import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manual-post',
  templateUrl: './manual-post.component.html',
  styleUrls: ['./manual-post.component.scss']
})
export class ManualPostComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
