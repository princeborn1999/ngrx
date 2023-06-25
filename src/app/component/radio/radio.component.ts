import { Component, Injector, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

export const RADIO_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioComponent),
  multi: true
}

export class RadioOption {
  name: string;
  value: string;
  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [RADIO_CONTROL_VALUE_ACCESSOR]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() name: string = '';

  //自定表單控件
  private _content: string = '';
  control = new FormControl();
  ngControl?: NgControl;
  onChange!: (value: any) => {};
  onTouch!: () => {};

  constructor(private inj: Injector) { }

  ngOnInit(): void {
    this.ngControl = this.inj.get(NgControl);
  }

  // 自定義表單控建 begin
  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
    this.contentChanged();
  }

  writeValue(obj: string) {
    this.content = obj;
    this.contentChanged();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(): void {
    this.contentChanged();
  }

  contentChanged(): void {
    if (this.onChange) {
      this.onTouch();
      this.onChange(this.content);
    }
  }
}
