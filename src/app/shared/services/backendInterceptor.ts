import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

const accessoriesData = {
  accessories: [
    {
      id: 1,
      name: 'accesorie1',
      price: 1234,
      image: '/assets/accessories/product1.jpg'
    },
    {
      id: 2,
      name: 'accesorie2',
      price: 1231,
      image: '/assets/accessories/product2.jpg'
    },
    {
      id: 3,
      name: 'accesorie2',
      price: 1123,
      image: '/assets/accessories/product3.jpg'
    },
    {
      id: 4,
      name: 'accesorie4',
      price: 1234,
      image: '/assets/accessories/product4.jpg'
    }
  ]
};

const jacketsData = {
  jackets: [
    {
      id: 1,
      name: 'jacket1',
      price: 1234,
      image: '/assets/jackets/product1.jpg'
    },
    {
      id: 2,
      name: 'jacket2',
      price: 1234,
      image: '/assets/jackets/product2.jpg'
    },
    {
      id: 3,
      name: 'jacket3',
      price: 1234,
      image: '/assets/jackets/product3.jpg'
    }
  ]
};

const shirtsData = {
  shirts: [
    {
      id: 1,
      name: 'shirt1',
      price: 1234,
      image: '/assets/shirts/product1.jpg'
    },
    {
      id: 2,
      name: 'shirt2',
      price: 1321,
      image: '/assets/shirts/product2.jpg'
    },
    {
      id: 3,
      name: 'shirt3',
      price: 14,
      image: '/assets/shirts/product3.jpg'
    },
    {
      id: 4,
      name: 'shirt4',
      price: 1234,
      image: '/assets/shirts/product4.jpg'
    }
  ]
};

const suitsData = {
  suits: [
    {
      id: 1,
      name: 'suitsdsdfsfsdf1',
      price: 1234,
      image: '/assets/suits/product1.jpg'
    },
    {
      id: 2,
      name: 'suit2',
      price: 143,
      image: '/assets/suits/product2.jpg'
    },
    {
      id: 3,
      name: 'suit3',
      price: 1544,
      image: '/assets/suits/product3.jpg'
    }
  ]
};

const trousersData = {
  trousers: [
    {
      id: 1,
      name: 'trouser1',
      price: 1234,
      image: '/assets/trousers/product1.jpg'
    },
    {
      id: 2,
      name: 'trouser2',
      price: 1432,
      image: '/assets/trousers/product2.jpg'
    },
    {
      id: 3,
      name: 'trouser3',
      price: 24,
      image: '/assets/trousers/product3.jpg'
    },
    {
      id: 4,
      name: 'trouser4',
      price: 123,
      image: '/assets/trousers/product4.jpg'
    }
  ]
};

const users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable({
  providedIn: 'root'
})

export class BackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(request);
    const { url, method, body, headers } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(200))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        // Login an Sign Up
        case url.endsWith('/login') && method === 'POST':
          return login();
        case url.endsWith('/signup') && method === 'POST':
          return signup();
        // Get all products
        case url.endsWith('accessories') && method === 'GET':
          return of(new HttpResponse({status: 200, body: accessoriesData}));
        case url.endsWith('/jackets') && method === 'GET':
          return of(new HttpResponse({status: 200, body: jacketsData}));
        case url.endsWith('/shirts'):
          return of(new HttpResponse({status: 200, body: shirtsData}));
        case url.endsWith('/suits'):
          return of(new HttpResponse({status: 200, body: suitsData}));
        case url.endsWith('/trousers'):
          return of(new HttpResponse({status: 200, body: trousersData}));
        // Get product by ID
        case url.includes('accessories/') && method === 'GET':
          return getProductById();
        case url.includes('jackets/') && method === 'GET':
          return getProductById();
        case url.includes('suits/') && method === 'GET':
          return getProductById();
        case url.includes('trousers/') && method === 'GET':
          return getProductById();
        case url.includes('shirts/') && method === 'GET':
          return getProductById();
        // Get, Add, Remove products from user basket
        case url.endsWith('addProducts') && method === 'POST':
          return addProductToUserBasket();
        case url.endsWith('getProducts') && method === 'GET':
          return getUserProductsBasket();
        case url.endsWith('removeProduct') && method === 'DELETE':
          return removeProductFromBasket();
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
        return error('Username or/and password is/are incorrect!');
      } else {
        return ok({
          id: user.id,
          email: user.email,
          token: user.token,
          name: user.name
          });
        }
    }

    function signup() {
      const newUserEmail  = body;
      console.log(body);
      const user = users.find(x => x.email === newUserEmail.email);
      if (!user) {
        newUserEmail.id = users.length ? users.length + 1 : 1;
        newUserEmail.token = 'fake-jwt-token' + newUserEmail.id;
        users.push(newUserEmail);
        localStorage.setItem('users', JSON.stringify(users));
        return ok({
          id: newUserEmail.id,
          email: newUserEmail.email,
          token: newUserEmail.token,
          name: newUserEmail.name
        });
      } else {
        return error('Username is already registered');
      }
    }

    function getProductById() {
      const id = +url.split('/')[1];
      const productCategory = url.split('/')[0];
      switch (true) {
        case productCategory === 'accessories':
          const accessory = accessoriesData.accessories.filter(item => item.id === id)[0];
          if (accessory) {
            return ok(accessory);
          } else {
            return error('There is no such product!');
          }
        case productCategory === 'jackets':
          const jacket = jacketsData.jackets.filter(item => item.id === id)[0];
          if (jacket) {
            return ok(jacket);
          } else {
            return error('There is no such product!');
          }
        case productCategory === 'suits':
          const suit = suitsData.suits.filter(item => item.id === id)[0];
          if (suit) {
            return ok(suit);
          } else {
            return error('There is no such product!');
          }
        case productCategory === 'shirts':
          const shirt = shirtsData.shirts.filter(item => item.id === id)[0];
          if (shirt) {
            return ok(shirt);
          } else {
            return error('There is no such product!');
          }
        case productCategory === 'trousers':
          const trouser = trousersData.trousers.filter(item => item.id === id)[0];
          if (trouser) {
            return ok(trouser);
          } else {
            return error('There is no such product!');
          }
      }
    }

    function addProductToUserBasket() {
      const newProductItem = body;
      const userBasketName = headers.get('userBasketName');
      const productsBasketArray = JSON.parse(localStorage.getItem(userBasketName)) || [];
      if (newProductItem) {
        productsBasketArray.push(newProductItem);
        localStorage.setItem(userBasketName, JSON.stringify(productsBasketArray));
        return ok(productsBasketArray)
      } else {
        return error('Something went wrong!');
      }
    }

    function getUserProductsBasket() {
      const userBasketName = headers.get('userBasketName');
      const productsBasketArray = JSON.parse(localStorage.getItem(userBasketName)) || [];
      if (productsBasketArray) {
        return ok(productsBasketArray)
      } else {
        return error('Something went wrong!');
      }
    }

    function removeProductFromBasket() {
      const userBasketName = headers.get('userBasketName');
      const productId = headers.get('productId');
      const productName = headers.get('productName');

      const productsBasketArray = JSON.parse(localStorage.getItem(userBasketName));
      const updatedProductsBasketArray = productsBasketArray.filter(product => product.id !== +productId || product.name !== productName);
      if (updatedProductsBasketArray) {
        localStorage.setItem(userBasketName, JSON.stringify(updatedProductsBasketArray));
        return ok(updatedProductsBasketArray);
      } else {
        return error('Something went wrong!');
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



