import { GoogleSigninButtonModule, SocialAuthService,
   SocialUser } from '@abacritt/angularx-social-login';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [GoogleSigninButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

    user!: SocialUser 
    loggedIn: boolean = false
    userSubscription!: Subscription ;
    authSubscription! : Subscription
    localStorageService = Inject(LocalStorageService)

constructor(private authService: SocialAuthService,
  private router: Router,
  private userService: UserService ,
  private auth: AuthService
  ) { }

     ngOnInit() {
     this.userSubscription = this.authService.authState.subscribe((user) => {

    
     if(user!=null){
     this.userService.setUser(user)
     this.localStorageService.setData('user',this.userService.getUser())

 
      const newUser = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        picture : user.photoUrl,
        accessToken: user.authToken ?? user.email
      }
     
     

      this.authSubscription =  this.auth.saveUser(newUser)
      .subscribe((res)=>{ 
        console.log("use saved to DB")
        this.router.navigateByUrl('cart')
      },
       (err)=>{ console.log(err)})


       
     
    }

  });

     }

     ngOnDestroy(){
       if(this.userSubscription){
        this.userSubscription.unsubscribe()
       }
      }



}
