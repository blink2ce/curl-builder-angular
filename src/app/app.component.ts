import { Component, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerKey = ''
  headerValue = '';
  queryKey = '';
  queryValue = '';
  authUsername = '';
  authPassword  = '';
  data = '';
  
  
}
