import {
  Component, Input, OnChanges,
  SimpleChanges, ViewChild
} from '@angular/core';


@Component({
  selector: 'on-changes',
  templateUrl: './on-changes.component.html'
})
export class OnChangesComponent implements OnChanges {
  @Input() data: string;
  @Input() authUsername: string;
  @Input() authPassword: string;

  ngOnChanges(changes: SimpleChanges) {
    alert("Something changed!");
  }

}
