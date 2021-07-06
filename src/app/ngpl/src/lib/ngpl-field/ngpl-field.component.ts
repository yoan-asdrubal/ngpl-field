import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {NGPL_FILTER_BASE, NgplFilterBase} from 'ngpl-filter';

@UntilDestroy()
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngpl-field',
  templateUrl: './ngpl-field.component.html',
  styleUrls: ['./ngpl-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgplFieldComponent),
      multi: true
    },
    {
      provide: NGPL_FILTER_BASE, useExisting: forwardRef(() => NgplFieldComponent)
    }
  ]
})
export class NgplFieldComponent implements OnInit, OnDestroy, ControlValueAccessor, NgplFilterBase {
  @Input() type: 'text' | 'number' = 'text';

  @Input() placeHolder = '';


  /**
   * Define el atributo appearance del matFormField, permite los mismos valores
   */
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' | 'default' = 'outline';

  @Input() color = 'accent';
  /**
   *  Define el comportamiento del floatLabel en el matFormField, acepta los mismos valores que el atributo floatLabel del matFormField
   */
  @Input() floatLabel = '';

  /**  Controla si el componenten debe mostrar un Skeleton */
  @Input() showLoading = false;

  @Input() showLoadingWidth = '100%';
  @Input() showLoadingHeight = '15px';
  /**
   *
   */
  /**
   * Define si el componente estara deshabilitado
   */
  disabledControl = false;

  @Input() readOnlyControl = false;

  /**
   * Define si el componente estara deshabilitado
   */
  @Input() disabled = false;


  @Input() iconPreffix: string;

  @Input() iconSuffix: string;

  @Input() autocomplete = 'on';
  _value: any;

  inputControl = new FormControl();

  @Input() customClass: '';
  /**
   * Emite cuando cambia el valor seleccionado
   */
  @Output() valueChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.inputControl.valueChanges
      .pipe(
        untilDestroyed(this),
        tap(val => {
          this._value = val;
          this.onChange(this._value);
          this.onTouch(this._value);
          this.valueChange.emit(this._value);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
  }

  onChange: any = () => {
  };
  onTouch: any = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledControl = isDisabled;
  }

  writeValue(obj: string): void {
    this._value = obj;
    this.inputControl.setValue(this._value);
  }


  newValue(value: any): void {
    this.writeValue(value);
  }

  clearValue(): void {
    this.inputControl.setValue(null);
    this._value = null;
    this.onChange(this._value);
    this.onTouch(this._value);
  }
}
