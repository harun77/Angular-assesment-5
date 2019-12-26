import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() product: any;
  @Input() toAdd: boolean;
  @Output() onAddProductEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addProduct(id: number, toAdd: boolean) {
    this.onAddProductEvent.emit({ id: id, toAdd: toAdd });
  }

}
