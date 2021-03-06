import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() textValue: EventEmitter<string> = new EventEmitter();
  @Output() searchValue: EventEmitter<string> = new EventEmitter();
  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.inputValue = event.target.value;
    this.textValue.emit(this.inputValue);
  }

  onSearch(event: any)
  {
    event.preventDefault();
    this.searchValue.emit(this.inputValue);
  }
}
