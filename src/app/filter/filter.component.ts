import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Filter } from '../shared/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter();

  postFilters: Filter[] = this.appService.getPostFilters();

  form: FormGroup;


  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.form = this.formBuilder.group({
      filters: this.formBuilder.array(
        this.postFilters.map(filter => this.createFilterGroup(filter))
      )
    });
  }

  createFilterGroup(filter): FormGroup {
    return this.formBuilder.group({
      name: [{value: filter.name, disabled: false}],
      enabled: [{value: filter.enabled, disabled: false}],
    });
  }

  get filters(): FormArray { return this.form.get('filters') as FormArray; }


  async handleClick() {
    this.filtersChanged.emit(this.form.value);

    let allFiltersTurnedOff = true;

    await this.form.value.filters.forEach(element => {
      if (element.enabled) {
        allFiltersTurnedOff = false;
      }
    });

    if (allFiltersTurnedOff) {
      this.postFilters = this.appService.getPostFilters();

      this.createForm();
    }
  }
}
