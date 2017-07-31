import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class AppComponent implements OnChanges {
  headers = HEADERS;
  queryParameters = QUERYPARAMS;
  dataoptions = ['Plain Text', 'JSON', 'XML'];
  httpoptions = ['GET', 'PUT', 'POST', 'DELETE'];
  title = 'app';
  @Input() authUsername = 'ho!';
  @Input() authPassword  = '';
  @Input() data = 'hum!';
  addKeyValue(array){
    array.push({key:'', value: ''});
  }
  deleteKeyValue(array){
    array.pop();
  }
  result = this.headers[0].key; 
  ngOnChanges(changes: SimpleChanges){
    console.log("Something changed!");
  }
}
