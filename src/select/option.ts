import { Component, Input, OnInit, Optional } from '@angular/core'
import { ElSelect } from './select'

@Component({
  selector: 'el-option',
  template: `
    <li class="el-select-dropdown__item"
      [class.is-disabled]="disabled || rootDisabled"
      [class.selected]="itemSelected"
      (click)="clickHandle()">
      <span>{{ label }}</span>
    </li>
  `,
})
export class ElOption implements OnInit {
  
  @Input() value: any
  @Input() label: string | number
  @Input() disabled: boolean = false
  
  private rootDisabled: boolean = false
  private itemSelected: boolean = false
  
  constructor(
    @Optional() private rootSelect: ElSelect,
  ) {
  }
  
  clickHandle(): void {
    this.rootSelect.changeLabel(this.label, this.value)
  }
  
  ngOnInit(): void {
    const updateHandle = () => {
      this.itemSelected = this.value === this.rootSelect.model
    }
    this.rootDisabled = this.rootSelect.disabled
    updateHandle()
    this.rootSelect.subscriber.push(updateHandle)
  }
}