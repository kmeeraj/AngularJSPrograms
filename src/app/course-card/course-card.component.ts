import {Component, Input, OnInit} from '@angular/core';
import {InputDecorator} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  title: string;
  constructor() { }

  ngOnInit() {
  }

}
