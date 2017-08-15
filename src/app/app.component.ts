import { Component, Input, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { KeyValue } from './keyvalue';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

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
  headerSuggestions: {} = {
    'Content-Type': ['application/json', 'application/xml', 'text/html', 'text/plain', 'text/xml'],
    'Authorization': ['Bearer'],
    'Accept': ['application/json', 'application/xml', 'text/html', 'text/plain', 'text/xml'],
    'Accept_Language': ['en-US']
  };
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
  ngOnInit(){
    this.makeResult();
  }
 
  makeResult() {
    var headersText = "";
    for(var el in this.headers){
       if(this.headers[el].key.length > 0 && this.headers[el].value.length > 0){
        headersText = headersText + ' --header \"' + this.headers[el].key + '\":\"' + this.headers[el].value + '\" ';
      }
    }

    var QPtext = '';
    for(var i = 0; i < this.queryParameters.length; i++){
      if(this.queryParameters[i].key.length > 0 && this.queryParameters[i].value.length > 0){
        if(i > 0){
          QPtext = QPtext + "&";
        }
        QPtext = QPtext + '?' + this.queryParameters[i].key + '=\"' + this.queryParameters[i].value + '\"';
      }
    }

    var methodText = '';
    if(this.url.length > 0){         
      methodText = '--request "' + this.httpOptionSelected + '" ' + this.url;
    }

    var authentication = "";
    if(this.authUsername.length > 0 || this.authPassword.length > 0){
      authentication =  "--user " + "\'" + this.authUsername + ":" + this.authPassword + " ";
    }

    return this.result = 'curl --verbose ' + headersText + ' ' + authentication + ' ' + methodText + ' ' + this.data + ' ' + QPtext;
  }


  protected dataService: CompleterData;

  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(Object.keys(this.headerSuggestions));
  }

}
