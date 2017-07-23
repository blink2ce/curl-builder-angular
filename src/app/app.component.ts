import { Component, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { Header } from './header';

const HEADERS: Header[] = [
  {key:'hi', value:'there'},
  {key:'cute', value:'doggy'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headers = HEADERS;
  title = 'app';
  headerKey = ''
  headerValue = '';
  queryKey = '';
  queryValue = '';
  authUsername = '';
  authPassword  = '';
  data = '';

  
}
