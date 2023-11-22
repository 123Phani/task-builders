import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';
   search() {
    console.log('Search term before emit:', this.searchTerm);
    this.searchEvent.emit(this.searchTerm);
  }
}
