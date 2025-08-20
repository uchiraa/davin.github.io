import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Shop } from './shop/shop';
import { Contact } from './contact/contact';
import { ShopSingle } from './shop-single/shop-single';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },

    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path:'shop',
        component: Shop
    },
    {
        path:'shop-single',
        component: ShopSingle
    },
    {
        path:'contact',
        component: Contact
    }
];
