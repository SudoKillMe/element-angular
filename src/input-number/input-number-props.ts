import { EventEmitter, Input, ViewChild } from '@angular/core'
import { ElInput } from '../input/input'

export class ElInputNumberPoprs {
  
  @Input() min: number = 0
  @Input() max: number = Number.MAX_SAFE_INTEGER
  @Input() step: number = 1
  @Input() size: string                 // enum: large, small
  @Input() disabled: boolean = false
  @Input() controls: boolean = true
  @Input() debounce: number = 300

  @ViewChild(ElInput) inputRef: ElInput
  // bind value
  @Input() model: any = ''
  protected modelChange: EventEmitter<any> = new EventEmitter<any> ()
  
}
