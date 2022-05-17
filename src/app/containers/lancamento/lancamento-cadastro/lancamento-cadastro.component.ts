import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/countryservice';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.scss']
})
export class LancamentoCadastroComponent implements OnInit {
    countries: any[];
    filteredCountries: any[];
    selectedDate:any;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => {
        this.countries = countries;
    });
  }


  filterCountry(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
        const country = this.countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }

    this.filteredCountries = filtered;
}
}
