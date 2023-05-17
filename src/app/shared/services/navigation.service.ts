import {Injectable, OnInit} from '@angular/core'
import { Router } from '@angular/router';


@Injectable({
providedIn : 'root'
})

export class NavigationService{

    constructor(
        private router : Router
    ){

    }

    navigateToHome(){
        this.router.navigate(['/dashboard/home'])
    }
    
}
