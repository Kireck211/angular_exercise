import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {
  @Input() value: string = 'default';
  @Input() label = 'default';
  @Input() name = 'default';
  @Input() isFilled: boolean = false;
  @Output() isFilledChange = new EventEmitter<string>();
  @Input() type: 'text' | 'password' = 'text';
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged(event: Event) {
    const { value } = (<HTMLInputElement>event.target);
    this.valueChange.emit(value);
    this.isFilledChange.emit(this.name);
  }
}
