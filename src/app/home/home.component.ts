import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { PruebaService } from '@app/_services/prueba.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    post: any = [];
    loading = false;
    users: User[];

    constructor(
        private userService: UserService,
        private prueba: PruebaService){
            this.post = new Array<any>();
        }

        getDataFromAPI() {
            this.prueba.getQuery().subscribe((data) => {
                console.log(data);
                this.post = data;
            });
        }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}