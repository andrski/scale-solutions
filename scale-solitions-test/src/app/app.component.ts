import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  inputValue = '';
  checked = false;
  data: string[];
  filterData: string[];

  constructor(private getDataService: GetDataService) {
    this.data = [];
    this.filterData = [];
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.getDataService.getData().subscribe((data: any) => {
      this.data = data.data;
    });
  }

  clearInputValue(): void {
    this.inputValue = '';
  }

  getLength(): void {
    this.filterData = [];
    if (parseInt(this.inputValue, 16)) {
      this.data.forEach((item) => {
        if (item.length >= Number(this.inputValue)) {
          this.filterData.push(item);
        }
      });
    }
  }

  getCaseString(): void {
    this.filterData = [];
    this.data.forEach((item) => {
      if (item.includes(this.inputValue)) {
        this.changeCaseString();
      }
    });
  }

  changeCaseString(): any {
    this.filterData = this.data.filter((str) =>
    (this.checked ? str : str.toLowerCase()).includes(
      this.checked ? this.inputValue : this.inputValue.toLowerCase()) );
  }
}
