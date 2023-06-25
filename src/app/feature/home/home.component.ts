import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { searchBarList } from 'src/assets/mock/mockSearchBar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  searchBarList = searchBarList;
  filterList: string[] = [];
  searchList: string[] = [];
  showList: string[] = [];
  showList1: string[] = [];
  searchText = '';
  showNavigationArrows = false;
  showNavigationIndicators = false;
  form!: FormGroup;
  initForm = {};
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [1055, 194, 368].map((n) => `https://www.muji.com/public/media/tw/img/main/10017321/L103-1260-0307.jpg`);

  constructor(
    config: NgbCarouselConfig,
    private _fb: FormBuilder
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.setSearchBarForm();
  }

  setSearchBarForm() {
    const formControls: any = {};
    this.searchBarList
      .map(list => list.items).flat()
      .map(item => { formControls[item.control] = new FormControl('') })
    this.form = this._fb.group(formControls);
    this.form.addControl('searchInput',this._fb.control(''));

    this.initForm = this.form.value;
  }

  setAll(d: any) {
  }

  changeSearch(category: string, control: string) {
    switch (category) {
      case 'Search':
        this.searchList = this.form.get(control)?.value ?
        [...this.searchList, control] :
        [...this.searchList.filter(value => value !== control)];
        break;

      case 'Filter':
        this.filterList = this.form.get(control)?.value ?
        [...this.filterList, control] :
        [...this.filterList.filter(value => value !== control)];
        break;

      default:
        break;
    }
  }

  confirm() {
    this.showList = this.filterList;
    this.showList1 = this.searchList;
    this.searchText = this.form.value.searchInput;
  }

  reset() {
    this.filterList.length = 0;
    this.searchList.length = 0;
    this.form.reset(this.initForm);
  }
}
