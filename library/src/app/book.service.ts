import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://127.0.0.1:8000/books/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  editBook(book: any): Observable<any> {
    const url = `${this.apiUrl}${book.id}/`;
    return this.http.put<any>(url, book);
  }

  deleteBook(bookId: number): Observable<any> {
    const url = `${this.apiUrl}${bookId}/`;
    return this.http.delete<any>(url);
  }

  getBook(bookId: number): Observable<any> {
    const url = `${this.apiUrl}${bookId}/`;
    return this.http.get<any>(url);
  }
}
