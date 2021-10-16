import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

// ContentHeader component interface
export interface ContentHeader {
  headerTitle: string;
  actionButton: boolean;
  breadcrumb?: {
    type?: string;
    links?: Array<{
      name?: string;
      isLink?: boolean;
      link?: string;
      linkicon?: string;
    }>;
  };
}

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent implements OnInit {
  public isChecked = true;
  // input variable
  @Input() contentHeader: ContentHeader;
  @Output() kpiChecked: EventEmitter<any>;

  constructor() {
    this.kpiChecked = new EventEmitter<any>();
  }

  ngOnInit() {}

  checkValue(event){
    this.kpiChecked.emit(this.isChecked);
  }
}
