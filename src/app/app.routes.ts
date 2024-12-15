import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent }, // Página inicial (lista de produtos)
    { path: 'cart', component: CartComponent },   // Rota para o carrinho
];
