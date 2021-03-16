import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {
  @Input() value = 'default';
  @Input() label = 'default';
  @Input() type: 'text' | 'password' = 'text';
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged(event: Event) {
    this.valueChange.emit((<HTMLInputElement>event.target).value);
  }
}
