import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-covid-general',
  templateUrl: './covid-general.page.html',
  styleUrls: ['./covid-general.page.scss'],
})
export class CovidGeneralPage implements OnInit {

  constructor(private http: HttpClient) { }
  paises = [];
  todosDatos = [];
  actual= [];
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos(){
    this.http.get('https://api.covid19api.com/summary').subscribe((data) => {
      this.actual = data['Global'];
      this.actual['Country'] = 'Global';
      this.actual['Date'] = data['Date'];
      this.paises.push(data['Global']);
      for (let index = 0; index < data['Countries'].length; index++) {
        this.paises.push(data['Countries'][index]);
      }
    });
  }
  onChange(event){
    let test = event.target.value;
    test=test.replace(' ', '');
    test=test.replace(' ', '');
    for (let index = 0; index < this.paises.length; index++) {
      if ( this.paises[index].Country == test) {
        this.actual = this.paises[index];
      }
      if( test === ''){
        this.actual['Country'] = 'Global';
        this.actual = this.paises[0];
      }
    }
  }
}
