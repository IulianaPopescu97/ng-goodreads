import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-goodreads";
  searchTerm: string = "";
  gpl: boolean = false;
  books = [
    {
      id: "9780439023480",
      ISBN: "439023483",
      ISBN13: "9780439023480",
      authors: "Suzanne Collins",
      originalTitle: "The Hunger Games",
      originalPublicationYear: 2008,
      averageRating: 4.34,
      languageCode: "eng",
      smallImageUrl:
        "https://images.gr-assets.com/books/1447303603s/2767052.jpg"
    },
    {
      id: "9780439554930",
      ISBN: "439554934",
      ISBN13: "9780439554930",
      authors: "J.K. Rowling, Mary GrandPré",
      originalTitle: "Harry Potter and the Philosopher's Stone",
      originalPublicationYear: 1997,
      averageRating: 4.44,
      languageCode: "eng",
      smallImageUrl: "https://images.gr-assets.com/books/1474154022s/3.jpg"
    },
    {
      id: "9780316015840",
      ISBN: "316015849",
      ISBN13: "9780316015840",
      authors: "Stephenie Meyer",
      originalTitle: "Twilight",
      originalPublicationYear: 2005,
      averageRating: 3.57,
      languageCode: "en-US",
      smallImageUrl: "https://images.gr-assets.com/books/1361039443s/41865.jpg"
    }
  ];

  doSearch(event: { searchTitle: string }): void {
    this.searchTerm = event.searchTitle;
  }
}
