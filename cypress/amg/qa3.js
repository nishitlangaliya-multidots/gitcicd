// import {
// 	CustomerFlow,
// 	StoreOwnerFlow
// } from 'cypress-woocommerce';

import { CustomerFlow, StoreOwnerFlow } from './flow'

export { CustomerFlow, StoreOwnerFlow }

describe( 'Stor Owner Flow check.', () => {
	before( () => {
		StoreOwnerFlow.login();
		StoreOwnerFlow.openSettings();
		//StoreOwnerFlow.logout();
	} );

	// it( 'should display no item in the cart', () => {
	// 	CustomerFlow.goToCart()
	// 	cy.contains( '.cart-empty', 'Your cart is currently empty.' )
	// } );

//   it( 'addToCartFromShopPage flow', () => {
//     CustomerFlow.goToShop();

// 		CustomerFlow.addToCartFromShopPage('Album');
// 	//	cy.contains( '.cart-empty', 'Your cart is currently empty.' )
// 	} );

	it( 'openAllOrdersView flow', () => {
		CustomerFlow.goToShop();
	StoreOwnerFlow.openDashboard();
	StoreOwnerFlow.openNewCoupon();
	StoreOwnerFlow.openNewOrder();
	StoreOwnerFlow.openNewProduct();
	StoreOwnerFlow.openPermalinkSettings();
	StoreOwnerFlow.openPlugins();
	StoreOwnerFlow.openSettings('shipping');
	StoreOwnerFlow.runSetupWizard();
			// CustomerFlow.addToCartFromShopPage('Album');
			// CustomerFlow.goToCheckout();
			// CustomerFlow.goToOrders();
			// CustomerFlow.goToDownloads();
			// CustomerFlow.goToAddresses();
			// CustomerFlow.goToProduct(25);
		//	cy.contains( '.cart-empty', 'Your cart is currently empty.' )
		} );
} );