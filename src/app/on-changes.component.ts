import {
  Component, Input, OnChanges,
  SimpleChanges, ViewChild
} from '@angular/core';
import { KeyValue } from './keyvalue';


@Component({
  selector: 'on-changes',
  templateUrl: './on-changes.component.html'
})
export class OnChangesComponent implements OnChanges {
  @Input() authUsername: string;
  @Input() authPassword: string;
  @Input() queryParameters: KeyValue[];
  @Input() headesrs: KeyValue[];

  result = ' ';
  ngOnChanges(changes: SimpleChanges) {
    this.result =  this.authUsername + ' ' + this.authPassword;
  }



}
