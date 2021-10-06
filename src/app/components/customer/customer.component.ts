import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  apiUrl = 'https://localhost:44301/api/customers/getall';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  getCustomers() {
    this.httpClient
      .get<ListResponseModel<Customer>>(this.apiUrl)
      .subscribe((response) => {
        this.customers = response.data;
      });
  }
}
