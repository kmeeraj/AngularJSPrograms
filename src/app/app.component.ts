import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  maincourse = COURSES[0];
  rxjscourse = COURSES[1];
  ngrxcourse = COURSES[2];
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
