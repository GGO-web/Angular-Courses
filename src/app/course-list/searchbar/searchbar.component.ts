import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
   selector: 'app-searchbar',
   templateUrl: './searchbar.component.html',
   styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
   @Output() search = new EventEmitter<string>();

   faSearch: IconDefinition = faSearch;
   form: FormGroup = new FormGroup({ search: new FormControl('') });

   submitForm() {
      const inputValue: string = this.form.value.search;

      this.search.emit(inputValue);

      return inputValue;
   }
}
