import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  books: any[] = [];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBooks();
    
  }
  fetchBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      }
    });
  }

  editBook(book: any): void {
    this.router.navigate(['/edit', book.id]);
  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(
      () => {
        this.fetchBooks()
      },
      (error) => {
        console.error('Book deleted:', error);
      }
    );
  }

}
