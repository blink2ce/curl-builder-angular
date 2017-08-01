import { Component, Input, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { KeyValue } from './keyvalue';

const HEADERS: KeyValue[] = [{key:'', value:''}]
const QUERYPARAMS: KeyValue[] = [{key:'', value:''}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  headers = HEADERS;
  queryParameters = QUERYPARAMS;
  authUsername = '';
  authPassword  = '';
  dataoptions = ['Plain Text', 'JSON', 'XML'];
  dataOptionSelected = 'JSON';
  data = '';
  httpoptions = ['GET', 'PUT', 'POST', 'DELETE'];
  httpOptionSelected = 'GET';
  url = 'www.example.com';
  result = '';
  addKeyValue(array){
    array.push({key:'', value: ''});
  }
  deleteKeyValue(array){
    array.pop();
  }
  printHeaders(array){
    var text = "";
    if(array.length == 1 && array[0].key.length == 0 && array[0].value.length == 0){
      return text; 
    }
    for(var el in array){
      text = text + ' --header \"' + array[el].key + '\":\"' + array[el].value + '\" ';
    }
    return text;
  }
  printQueryParameters(array){
    var text = '';
    for(var i = 0; i < array.length; i++){
      if(i > 0){
        text = text + "&";
      }
      text = text + '?' + array[i].key + '=\"' + array[i].value + '\"';
    }
    return text;
  }
  printMethod(){
    if(this.url.length > 0){         
      return '--request "' + this.httpOptionSelected + '" ' + this.url;
    }
  }
  printAuthentication(){
    var authentication = "";
    if(this.authUsername.length > 0 || this.authPassword.length > 0){
      authentication =  "--user " + "\'" + this.authUsername + ":" + this.authPassword + " ";
      return authentication;
    }
    return authentication;
  }
  makeResult(){
    return this.result = 'curl --verbose ' + this.printHeaders(this.headers) + ' ' + this.printAuthentication() + ' ' + this.printMethod() + ' ' + this.data + ' ' + this.printQueryParameters(this.queryParameters);
  }

  ngOnInit(){
    this.makeResult();
  }
 
}
