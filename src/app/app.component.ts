import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {HttpClient, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses ;

  title = COURSES[0].description;

  price = 9.99;

  rate = 0.67;

  course = COURSES[0];

  startDate = new Date(2000, 0, 1);

  data = {
     title : 'angular course'
    // title : '<h1>angular content</h1><script>alert("Alert")</script>'
  };

  constructor(private http: HttpClient){

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

    const params = new HttpParams()
      .set("page","1")
      .set("pageSize","10");

    this.http.get('/api/courses',{params})
      .subscribe(
        courses => this.courses = courses
      );
  }
}
