import { Component, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { KeyValue } from './keyvalue';

const HEADERS: KeyValue[] = [
  {key:'hi', value:'there'},
  {key:'cute', value:'doggy'}
]
const QUERYPARAMS: KeyValue[] = [
  {key:'I am', value:'A query parameter'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headers = HEADERS;
  queryParameters = QUERYPARAMS;
  dataoptions = ['Plain Text', 'JSON', 'XML'];
  httpoptions = ['GET', 'PUT', 'POST', 'DELETE'];
  title = 'app';
  authUsername = '';
  authPassword  = '';
  data = '';
  addKeyValue(array){
    array.push({key:'', value: ''});
  }
  deleteKeyValue(array){
    array.pop();
  }
  
}
