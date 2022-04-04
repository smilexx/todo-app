import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private apiService: ApiService) {
  }

  async getList() {
    const { data, error } = (await this.apiService.client?.from('todos').select()) || {};

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async create() {

  }
}
