import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"]
})
export class SearchBoxComponent implements OnInit {
  title: string = "Search";
  searchTerm: string = "";
  @Output() searchFired = new EventEmitter<{ searchTerm: string }>();
  constructor() {}

  ngOnInit(): void {}

  onChange(value) {
    this.searchTerm = value;
  }

  onSearch() {
    this.searchFired.emit({ searchTerm: this.searchTerm });
  }
}
