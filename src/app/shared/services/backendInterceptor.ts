import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import Jackets from '../../../assets/jackets.json';

const accessoriesData = {
  accessories: [
    {
      id: 1,
      name: 'accesorie1',
      price: '1234 UA',
      image: '/assets/accessories/product1.jpg'
    },
    {
      id: 1,
      name: 'accesorie2',
      price: '1dsz4 UA',
      image: '/assets/accessories/product2.jpg'
    },
    {
      id: 1,
      name: 'accesorie2',
      price: '1zxczxc4 UA',
      image: '/assets/accessories/product3.jpg'
    },
    {
      id: 1,
      name: 'accesorie4',
      price: '1234 UA',
      image: '/assets/accessories/product4.jpg'
    }
  ],
};

const jacketsData = {
  jackets: [
    {
      id: 1,
      name: 'jacket1',
      price: '1234 UA',
      image: '/assets/jackets/product1.jpg'
    },
    {
      id: 1,
      name: 'jacket2',
      price: '1234 UA',
      image: '/assets/jackets/product2.jpg'
    },
    {
      id: 1,
      name: 'jacket3',
      price: '1234 UA',
      image: '/assets/jackets/product3.jpg'
    }
  ]
};

const shirtsData = {
  shirts: [
    {
      id: 1,
      name: 'shirt1',
      price: '1234 UA',
      image: '/assets/shirts/product1.jpg'
    },
    {
      id: 1,
      name: 'shirt2',
      price: '1dsz4 UA',
      image: '/assets/shirts/product2.jpg'
    },
    {
      id: 1,
      name: 'shirt3',
      price: '1zxczxc4 UA',
      image: '/assets/shirts/product3.jpg'
    },
    {
      id: 1,
      name: 'shirt4',
      price: '1234 UA',
      image: '/assets/shirts/product4.jpg'
    }
  ]
};

const suitsData = {
  suits: [
    {
      id: 1,
      name: 'suitsdsdfsfsdf1',
      price: '1234 UA',
      image: '/assets/suits/product1.jpg'
    },
    {
      id: 1,
      name: 'suit2',
      price: '1dsz4 UA',
      image: '/assets/suits/product2.jpg'
    },
    {
      id: 1,
      name: 'suit3',
      price: '1zxczxc4 UA',
      image: '/assets/suits/product3.jpg'
    }
  ]
};

const trousersData = {
  trousers: [
    {
      id: 1,
      name: 'trouser1',
      price: '1234 UA',
      image: '/assets/trousers/product1.jpg'
    },
    {
      id: 1,
      name: 'trouser2',
      price: '1dsz4 UA',
      image: '/assets/trousers/product2.jpg'
    },
    {
      id: 1,
      name: 'trouser3',
      price: '1zxczxc4 UA',
      image: '/assets/trousers/product3.jpg'
    },
    {
      id: 1,
      name: 'trouser4',
      price: '1234 UA',
      image: '/assets/trousers/product4.jpg'
    }
  ]
};

const users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()

export class BackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Loaded from http call :' + request.url);
    const { url, method, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(200))
      .pipe(dematerialize());


    function handleRoute() {
      switch (true) {
        case url.endsWith('/login') && method === 'POST':
          return login();
        case url.endsWith('/signup') && method === 'POST':
          return signup();
        case url.endsWith('/accessories') && method === 'GET':
          return of(new HttpResponse({status: 200, body: accessoriesData}));
        case url.endsWith('/jackets') && method === 'GET':
          return of(new HttpResponse({status: 200, body: Jackets}));
        case url.endsWith('/shirts'):
          return of(new HttpResponse({status: 200, body: shirtsData}));
        case url.endsWith('/suits'):
          return of(new HttpResponse({status: 200, body: suitsData}));
        case url.endsWith('/trousers'):
          return of(new HttpResponse({status: 200, body: trousersData}));
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions
    function login() {
      console.log(users);
      const { email, password } = body;
      const user = users.find(x => x.email === email && x.password === password);
      if (!user) {
        return error('Username or password is incorrect');
      } else {
        return ok({
          token: `fake-jwt-token${user.id}`
          });
        }
    }

    function signup() {
      const { email, password } = body;
      const user = users.find(x => x.email === email);
      if (!user) {
        body.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
        users.push(body);
        console.log(users);
        localStorage.setItem('users', JSON.stringify(users));
        return ok({
          token: `fake-jwt-token${body.id}`
        });
      } else {
        return error('Username is already registered');
      }
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }
  }
  }



