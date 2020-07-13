import { Component, OnInit } from '@angular/core';
// import { DataStoreService } from '../../services/data-store.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public today: number = Date.now();
    public title: string = 'Angular Test';
    public students: number = 3424234;
    public price: number = 32432424.23424;
    public copleted: number = 0.3424;

    public data;

    constructor(
        // 2. add service
        // private _storeData: DataStoreService
    ) { }

    async ngOnInit() {
        await this.initiateStoreDataSubscriptions();
    }

    async initiateStoreDataSubscriptions() {
        console.log('Initialized!');
    }

    public submit(e: any) {
        console.log('Submitted !!!: ', e);
    }

    public clear() {
        this.data = '';
        console.log('Cleared!!!');
    }
}
