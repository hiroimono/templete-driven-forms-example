import { Component, OnInit } from '@angular/core';
import { SimpleDataSource } from './data-source.model';
import { Product } from './product.model';
import { ProductRepository } from './repository.model';
import { NgForm, NgModel } from '@angular/forms';

@Component({
    selector: 'app-forms-example',
    templateUrl: './forms-example.component.html',
    styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent implements OnInit {

    public model: ProductRepository = new ProductRepository();
    public newProduct: Product = new Product();
    public formSubmitted: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    get JsonProduct(): string {
        return JSON.stringify(this.newProduct);
    }

    addProduct(newP: Product = this.newProduct) {
        console.log('New Product: ', this.JsonProduct);
    }

    getFormValidationErrors(form: NgForm): string[] {
        let errors: any[] = [];

        Object.keys(form.controls).forEach(key => {
            this.getValidationErrors(form.controls[key], key).forEach(error => errors.push(error));
        })

        return errors;
    }

    makeOnlyFirstLetterUpperCase(text: string): string {
        return text.toUpperCase().slice(0, 1) + text.toLowerCase().slice(1);
    }

    getValidationErrors(model: any, key?: string) {
        let controlName: string;
        model.name ? controlName = this.makeOnlyFirstLetterUpperCase(model.name) : controlName = this.makeOnlyFirstLetterUpperCase(key);
        let errors: any[] = [];

        if (model.errors) {
            for (let errorName in model.errors) {
                switch (errorName) {
                    case 'required':
                        errors.push(`${controlName} is a required field!`)
                        break;

                    case 'minlength':
                        errors.push(`Min. ${model.errors.minlength.requiredLength} character must be entered!`)
                        break;

                    case 'pattern':
                        errors.push(`Invalid characters were entered!`)
                        break;

                    default:
                        break;
                }
            }
        };

        return errors;
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }

    clear(form: NgForm) {
        this.newProduct = new Product();
        form.reset();
        this.formSubmitted = false;
    }

    log(ngModel) {
        console.log('ngModel: ', ngModel);
    }
}
