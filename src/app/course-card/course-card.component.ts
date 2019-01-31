/* tslint:disable:no-output-rename */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Course} from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardindex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  constructor() { }

  ngOnInit() {
  }

  onCourseViewed() {
    console.log('Card component .. button clicked..');
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
}
