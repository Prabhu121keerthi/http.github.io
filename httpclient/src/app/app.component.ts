import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interface/user';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpclient';

  private user:any = {
    'id': 2,
    'name': 'Junior Graham',
    'username': 'Junior',
    'email': 'junior@april.biz'
  };

/*
  private user:User = {
    'id': 5,
    'name': 'Junior Graham',
    'username': 'Junior',
    'email': 'junior@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Get Arrays',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }
*/

  constructor(private userService:UserService) {

/*
    type HttpResponse = { code:number, data:string};

     const obs = new Observable<HttpResponse>(subscriber => {
      console.log('Inside subscriber...');
      subscriber.next({ code: 200 , data: 'this is data 1...'});
      subscriber.next({ code: 200 , data: 'this is data 2...'});
      subscriber.next({ code: 200 , data: 'this is data 3...'});
      //subscriber.error({ code: 500 , msg:'An error occured'});
      setTimeout(() => {
        subscriber.next({ code: 200 , data: 'this is data more data'});

      }, 3 * 1000);

      console.log('subscriber is done emitting...');
    }) ;

    obs.subscribe({
      next(response:HttpResponse) {
        console.log('got response: ', response);
      },
      error(error:any) {
        console.log('something wrong occured: ', error);
      },
      complete() {
        console.log('done');
      }
    }
      
    )
    */
    }

    ngOnInit(): void {
      //this.onUpdateUser();
      //this.onPatchUser();
      //this.onDeleteUser();
      this.onTextFile();
      this.onGetUsers();
      //this.onGetUser();
      //this.onCreateUser();
    }

    onGetUsers(): void {
      this.userService.getUsers().subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done getting users')
      )       
    }

    onGetUser(): void {
      this.userService.getUser().subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done getting users')
      )
    }

    onTextFile(): void {
      this.userService.getTextFile().subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done getting text file')
      )
    }


    onCreateUser(): void {
      this.userService.createUser(this.user).subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done creating users')
      )
    }

    onUpdateUser(): void {
      this.userService.updateUser(this.user).subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done updating users')
      )
    }

    onPatchUser(): void {
      this.userService.patchUser(this.user).subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done updating users')
      )
    }

    onDeleteUser(): void {
      this.userService.deleteUser(5).subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done deleting users')
      )
    }

  }

