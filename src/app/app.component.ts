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
  title = 'app';
  headers = HEADERS;
  queryParameters = QUERYPARAMS;
  dataoptions = ['Plain Text', 'JSON', 'XML'];
  httpoptions = ['GET', 'PUT', 'POST', 'DELETE'];
  authUsername = 'ho!';
  authPassword  = '';
  data = 'hum!';
  result = '';
  addKeyValue(array){
    array.push({key:'', value: ''});
  }
  deleteKeyValue(array){
    array.pop();
  }
  makeResult(){
    this.result = 'curl --verbose ' + this.authUsername + ' ' + this.authPassword + ' ' + this.data + ' ' + this.headers[0].key + ' ' + this.queryParameters[0].key;
  }
  
}
