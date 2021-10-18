import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Provider } from '../interfaces/provider.interface';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.baseUrl}/providers`);
  }

  getProviderById(id: number): Observable<Provider> {
    return this.http.get<Provider>(`${this.baseUrl}/providers/${id}`);
  }

  postProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(`${this.baseUrl}/providers`, provider);
  }

  updateProvider(provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(
      `${this.baseUrl}/providers/${provider.id}`,
      provider
    );
  }

  deleteProvider(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/providers/${id}`);
  }
}
