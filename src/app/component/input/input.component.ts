import { Component, Injector, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

export const INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type: string = 'radio';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() name: string = '';

  //自定表單控件
  private _content: string = '';
  control = new FormControl();
  onChange!: (value: any) => {};
  onTouch!: () => {};
  ngControl?: NgControl;

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

  writeValue(obj: any) {
    this.content = obj;
    this.contentChanged();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.contentChanged();
  }

  contentChanged(): void {
    if (this.onChange) {
      this.onTouch();
      this.onChange(this.content);
    }
  }
}
