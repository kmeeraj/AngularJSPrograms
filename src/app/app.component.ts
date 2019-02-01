import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoursesService} from './services/courses.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: Observable<Course[]>;


  title = COURSES[0].description;

  price = 9.99;

  rate = 0.67;

  course = COURSES[0];

  startDate = new Date(2000, 0, 1);

  data = {
     title : 'angular course'
    // title : '<h1>angular content</h1><script>alert("Alert")</script>'
  };

  constructor( private coursesService: CoursesService) {

  }

  onLogoClick() {
    alert('Hello World');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  onCourseSelected(course: Course) {
    console.log('App Component .. card is clicked',course);
  }

  ngOnInit() {
    console.log(this.coursesService);
    this.courses$ = this.coursesService.loadCourses();
  }
}
