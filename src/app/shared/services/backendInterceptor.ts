import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const accessoriesData = {
  accessories: [
    {
      id: 1,
      name: 'accesorie1',
      price: '1234 UA'
    },
    {
      id: 1,
      name: 'accesorie2',
      price: '1dsz4 UA'
    },
    {
      id: 1,
      name: 'accesorie2',
      price: '1zxczxc4 UA'
    },
    {
      id: 1,
      name: 'accesorie4',
      price: '1234 UA'
    }
  ],
};

const jacketsData = {
  jackets: [
    {
      id: 1,
      name: 'jacket1',
      price: '1234 UA'
    },
    {
      id: 1,
      name: 'jacket2',
      price: '1234 UA'
    },
    {
      id: 1,
      name: 'jacket3',
      price: '1234 UA'
    }
  ]
};

const shirtsData = {
  shirts: [
    {
      id: 1,
      name: 'shirt1',
      price: '1234 UA'
    },
    {
      id: 1,
      name: 'shirt2',
      price: '1dsz4 UA'
    },
    {
      id: 1,
      name: 'shirt3',
      price: '1zxczxc4 UA'
    },
    {
      id: 1,
      name: 'shirt4',
      price: '1234 UA'
    }
  ]
};

const suitsData = {
  suits: [
    {
      id: 1,
      name: 'suitsdsdfsfsdf1',
      price: '1234 UA'
    },
    {
      id: 1,
      name: 'suit2',
      price: '1dsz4 UA'
    },
    {
      id: 1,
      name: 'suit3',
      price: '1zxczxc4 UA'
    },
    {
      id: 1,
      name: 'suit4',
      price: '1234 UA'
    }
  ]
};

const trousersData = {
  trousers: [
    {
      id: 1,
      name: 'trouser1',
      price: '1234 UA'
    },
    {
      id: 1,
      name: 'trouser2',
      price: '1dsz4 UA'
    },
    {
      id: 1,
      name: 'trouser3',
      price: '1zxczxc4 UA'
    },
    {
      id: 1,
      name: 'trouser4',
      price: '1234 UA'
    }
  ]
};

const usersData = {
  users: [
    {
      email: 'qweqweqwe@asqwqwe',
      password: 'trouser1'
    },
    {
      email: 'qweqwe@asqwqwe',
      password: 'troer1'
    },
    {
      email: 'qweqwwe@asqwqwe',
      password: 'trouse132'
    },
    {
      email: 'qweqweqwe@asqwe',
      password: 'troasdasaa'
    }
  ]
};

@Injectable()

export class BackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    console.log('Loaded from http call :' + request.url);
    switch (request.url) {
      case 'http://localhost:4200/accessories' :
        return of(new HttpResponse({status: 200, body: accessoriesData}));
      case 'jackets' :
        return of(new HttpResponse({status: 200, body: usersData}));
      case 'http://localhost:4200/jackets':
        return of(new HttpResponse({status: 200, body: jacketsData}));
      case 'http://localhost:4200/shirts':
        return of(new HttpResponse({status: 200, body: shirtsData}));
      case 'http://localhost:4200/suits':
        return of(new HttpResponse({status: 200, body: suitsData}));
      case 'http://localhost:4200/trousers':
        return of(new HttpResponse({status: 200, body: trousersData}));
      case 'http://localhost:4200/users':
        return of(new HttpResponse({status: 200, body: usersData}));
      default:
        return next.handle(request);
    }
  }
}


