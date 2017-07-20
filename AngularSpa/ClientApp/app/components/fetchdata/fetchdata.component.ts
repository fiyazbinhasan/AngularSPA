//import { Component, Inject, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Http } from '@angular/http';

//@Component({
//    selector: 'fetchdata',
//    templateUrl: './fetchdata.component.html'
//})
//export class FetchDataComponent implements OnInit {
//    transactionForm: FormGroup;
//    public submitted: boolean;
//    public events: any[] = [];

//    constructor(private fb: FormBuilder) {
        
//    }

//    ngOnInit() {
//        this.createForm();
//        this.subcribeToFormChanges();
//    }

//    createForm() {
//        this.transactionForm = this.fb.group({ 
//            amount: ['', Validators.required],
//            transactionType: ['', Validators.required],
//        });
//    }

//    subcribeToFormChanges() {
//        const myFormStatusChanges$ = this.transactionForm.statusChanges;
//        const myFormValueChanges$ = this.transactionForm.valueChanges;
//        debugger;
//        myFormStatusChanges$.subscribe(x => console.log(this.events.push({ event: 'STATUS_CHANGED', object: x }), x ));
//        myFormValueChanges$.subscribe(x => console.log(this.events.push({ event: 'VALUE_CHANGED', object: x }, x )));
//    }

//    save(model: Transaction, isValid: boolean) {
//        this.submitted = true;
//        console.log(model, isValid);
//    }
//}

//interface Transaction {
//    amount: number,
//    transactionType: string
//}

import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    constructor(http: Http) {
        http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}