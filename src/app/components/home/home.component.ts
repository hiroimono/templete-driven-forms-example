import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public data: string; // in this example data is a text

    constructor(
        // 2. add service
        private _storeData: DataStoreService
    ) { }

    async ngOnInit() {
        await this.initiateStoreDataSubscriptions();
    }

    async initiateStoreDataSubscriptions() {
        console.log('Initialized!');
    }

    public submit() {
        console.log('Submitted!!!');
    }

    public clear() {
        this.data = '';
        console.log('Cleared!!!');
    }
}
