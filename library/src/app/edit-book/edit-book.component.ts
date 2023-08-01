import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId: number = 0;
  book: any = { id: 0, title: '', author: '', category: '', publisher: '' };

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private bookService: BookService) {
    this.bookId = this.route.snapshot.params['id'];
    this.fetchBookDetails();
  }

  ngOnInit(): void {
  }

  fetchBookDetails(): void { 
    this.bookService.getBook(this.bookId).subscribe({next: (data) => {
        this.book = data;
      },
      error: (error) => {
        console.error('Book details:', error);
      }
    });
  }

  updateBook(): void {
    this.bookService.editBook(this.book).subscribe({
      next: () => {
        this.router.navigate(['/view']);
      },
      error: (error) => {
        console.error('error updating book:', error);
      }
    });
  }
}
