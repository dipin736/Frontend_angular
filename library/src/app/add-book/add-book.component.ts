import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  newBook: any = { title: '', author: '', category: '', publisher: '' };

  constructor(private router: Router, private bookService: BookService) { }

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe(() => {
        this.router.navigate(['/view']);
        console.log('Added',this.bookService)
      },
      (error) => {
        console.error('error ', error);
      }
    );
  }

}
