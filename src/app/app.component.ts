import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = COURSES[0].description;

  startDate = new Date(2000, 0, 1);

  data = {
     title : 'angular course'
    // title : '<h1>angular content</h1><script>alert("Alert")</script>'
  };


  onLogoClick() {
    alert('Hello World');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  onCourseSelected(course:Course) {
    console.log('App Component .. card is clicked',course);
  }
}
