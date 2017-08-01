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
  authUsername = 'ho!';
  authPassword  = '';
  dataoptions = ['Plain Text', 'JSON', 'XML'];
  dataOptionSelected = 'JSON';
  data = 'hum!';
  httpoptions = ['GET', 'PUT', 'POST', 'DELETE'];
  httpOptionSelected = 'GET';
  url = 'www.example.com';
  result = 'curl --verbose ' + this.printHeaders(this.headers) + ' ' + this.url + ' ' +this.authUsername + ' ' + this.authPassword + ' ' + this.data + ' ' + this.printQueryParameters(this.queryParameters);
  addKeyValue(array){
    array.push({key:'', value: ''});
  }
  deleteKeyValue(array){
    array.pop();
  }
  printHeaders(array){
    var text = '';
    for(var el in array){
      text = text + ' --header ' + array[el].key + ':' + array[el].value;
    }
    return text;
  }
  printQueryParameters(array){
    var text = '';
    for(var el in array){
      if(el != array[0]){
        text = text + "&";
      }
      text = text + '?' + array[el].key + '=' + array[el].value;
    }
    return text;
  }
  makeResult(){
    this.result = 'curl --verbose ' + this.printHeaders(this.headers) + ' ' + this.url + ' ' +this.authUsername + ' ' + this.authPassword + ' ' + this.data + ' ' + this.printQueryParameters(this.queryParameters);
  }
  
}
