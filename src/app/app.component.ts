import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {}

  getMessage() {
    // ✅ Use relative path so proxy can forward to backend container
    this.http.get('/api/hello', { responseType: 'text' })
      .subscribe(data => this.message = data);
  }
}
