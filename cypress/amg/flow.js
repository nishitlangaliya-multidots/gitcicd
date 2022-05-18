/**
 * External dependencies
 */
 import 'cypress-xpath'

 const WP_ADMIN_LOGIN = 'http://cicd.local/wp-login.php';
 const WP_ADMIN_DASHBOARD = 'http://cicd.local/wp-admin';
 const WP_ADMIN_PLUGINS = 'http://cicd.local/wp-admin/plugins.php';
 const WP_ADMIN_SETUP_WIZARD = 'http://cicd.local//wp-admin/admin.php?page=wc-setup';
 const WP_ADMIN_ALL_ORDERS_VIEW = 'http://cicd.local//wp-admin/edit.php?post_type=shop_order';
 const WP_ADMIN_NEW_COUPON = 'http://cicd.local/wp-admin/post-new.php?post_type=shop_coupon';
 const WP_ADMIN_NEW_ORDER = 'http://cicd.local/wp-admin/post-new.php?post_type=shop_order';
 const WP_ADMIN_NEW_PRODUCT = 'http://cicd.local/wp-admin/post-new.php?post_type=product';
 const WP_ADMIN_WC_SETTINGS = 'http://cicd.local/wp-admin/admin.php?page=wc-settings&tab=';
 const WP_ADMIN_PERMALINK_SETTINGS = 'http://cicd.local/wp-admin/options-permalink.php';
 
 const SHOP_PAGE = 'http://cicd.local/shop';
 const SHOP_PRODUCT_PAGE = 'http://cicd.local/?p=';
 const SHOP_CART_PAGE = 'http://cicd.local/cart';
 const SHOP_CHECKOUT_PAGE = 'http://cicd.local/checkout/';
 const SHOP_MY_ACCOUNT_PAGE = 'http://cicd.local/my-account/';
 
 const MY_ACCOUNT_ORDERS = 'http://cicd.local/my-account/orders';
 const MY_ACCOUNT_DOWNLOADS = 'http://cicd.local/my-account/downloads';
 const MY_ACCOUNT_ADDRESSES = 'http://cicd.local/my-account/edit-address';
 const MY_ACCOUNT_ACCOUNT_DETAILS = 'http://cicd.local/my-account/edit-account';
 
 const getProductColumnExpression = ( productTitle ) => (
     'td[@class="product-name" and ' +
     `a[contains(text(), "${ productTitle }")]` +
     ']'
 );
 
 const getQtyColumnExpression = ( args ) => (
     'td[@class="product-quantity" and ' +
     './/' + getQtyInputExpression( args ) +
     ']'
 );
 
 const getQtyInputExpression = ( args = {} ) => {
     let qtyValue = '';
 
     if ( args.checkQty ) {
         qtyValue = ` and @value="${ args.qty }"`;
     }
 
     return 'input[contains(@class, "input-text")' + qtyValue + ']';
 };
 
 const getCartItemExpression = ( productTitle, args ) => (
     '//tr[contains(@class, "cart_item") and ' +
     getProductColumnExpression( productTitle ) +
     ' and ' +
     getQtyColumnExpression( args ) +
     ']'
 );
 
 const getRemoveExpression = () => (
     'td[@class="product-remove"]//a[@class="remove"]'
 );
 
 const CustomerFlow = {
 
     addToCart: () => {
         cy.get( '.single_add_to_cart_button' ).click();
     },
 
     addToCartFromShopPage: ( productTitle ) => {
         const addToCartXPath = `//li[contains(@class, "type-product") and a/h2[contains(text(), "${ productTitle }")]]` +
         '//a[contains(@class, "add_to_cart_button") and contains(@class, "ajax_add_to_cart")]';
        
         cy.xpath( addToCartXPath ).click({ force: true }).should('have.class', 'added');
     },
 
     goToCheckout: () => {
         cy.visit( SHOP_CHECKOUT_PAGE )
     },
 
     goToOrders: () => {
         cy.visit( MY_ACCOUNT_ORDERS )
     },
 
     goToDownloads: () => {
         cy.visit( MY_ACCOUNT_DOWNLOADS )
     },
 
     goToAddresses: () => {
         cy.visit( MY_ACCOUNT_ADDRESSES )
     },
 
     goToAccountDetails: () => {
         cy.visit( MY_ACCOUNT_ACCOUNT_DETAILS )
     },
 
     goToProduct: ( postID ) => {
         cy.visit( SHOP_PRODUCT_PAGE + postID )
     },
 
     goToShop: () => {
         cy.visit( SHOP_PAGE )
     },
 
     goToCart: () => {
         cy.visit( SHOP_CART_PAGE )
     },
 
     login: ( username, password ) => {
         cy.visit( SHOP_MY_ACCOUNT_PAGE )
         cy.get( '#username' ).type( username )
         cy.get( '#password' ).type( password )
         cy.get( 'button[name="login"]' ).click({ force: true })
     },
 
     placeOrder: () => {
         cy.get( '#place_order' ).click({ force: true })
     },
 
     productIsInCheckout: ( productTitle, quantity, total, cartSubtotal ) => {
         cy.contains( '.product-name', productTitle );
         cy.contains( '.product-quantity', quantity );
         cy.contains( '.product-total .amount', total );
         cy.contains( '.cart-subtotal .amount', cartSubtotal );
     },
 
     productIsInCart: ( productTitle, quantity, total, cartSubtotal ) => {
         const cartItemArgs = quantity ? { qty: quantity } : {};
         const cartItemXPath = getCartItemExpression( productTitle, cartItemArgs );
 
         cy.xpath( cartItemXPath ).should( (cartItem) => {
             expect( cartItem ).to.have.length(1)
         })
     },
 
     fillBillingDetails: ( customerBillingDetails ) => {
         cy.get( '#billing_first_name' ).type( customerBillingDetails.firstname );
         cy.get( '#billing_last_name' ).type( customerBillingDetails.lastname );
         cy.get( '#billing_company' ).type( customerBillingDetails.company );
         cy.get( '#billing_country' ).type( customerBillingDetails.country );
         cy.get( '#billing_address_1' ).type( customerBillingDetails.addressfirstline );
         cy.get( '#billing_address_2' ).type( customerBillingDetails.addresssecondline );
         cy.get( '#billing_city' ).type( customerBillingDetails.city );
         cy.get( '#billing_state' ).type( customerBillingDetails.state );
         cy.get( '#billing_postcode' ).type( customerBillingDetails.postcode );
         cy.get( '#billing_phone' ).type( customerBillingDetails.phone );
         cy.get( '#billing_email' ).type( customerBillingDetails.email );
     },
 
     fillShippingDetails: ( customerShippingDetails ) => {
         cy.get( '#shipping_first_name' ).type( customerShippingDetails.firstname );
         cy.get( '#shipping_last_name' ).type( customerShippingDetails.lastname );
         cy.get( '#shipping_company' ).type( customerShippingDetails.company );
         cy.get( '#shipping_country' ).type( customerShippingDetails.country );
         cy.get( '#shipping_address_1' ).type( customerShippingDetails.addressfirstline );
         cy.get( '#shipping_address_2' ).type( customerShippingDetails.addresssecondline );
         cy.get( '#shipping_city' ).type( customerShippingDetails.city );
         cy.get( '#shipping_state' ).type( customerShippingDetails.state );
         cy.get( '#shipping_postcode' ).type( customerShippingDetails.postcode );
         cy.get( '#shipping_phone' ).type( customerShippingDetails.phone );
         cy.get( '#shipping_email' ).type( customerShippingDetails.email );
     },
 
     removeFromCart: ( productTitle ) => {
         const cartItemXPath = getCartItemExpression(productTitle);
         const removeItemXPath = cartItemXPath + '//' + getRemoveExpression();
 
         cy.xpath( removeItemXPath ).click({ force: true });
     },
 
     setCartQuantity: ( productTitle, quantityValue ) => {
         const cartItemXPath = getCartItemExpression( productTitle );
         const quantityInputXPath = cartItemXPath + '//' + getQtyInputExpression();
         cy.get( quantityInputXPath ).focus().type( quantityValue.toString() );
     }
 
 };
 
 const StoreOwnerFlow = {
     login: () => {
         cy.visit( WP_ADMIN_LOGIN )
 
         cy.title().should( 'contains', 'Log In' )
 
         cy.get( '#user_login' ).clear().type('a');
         cy.get( '#user_pass' ).clear().type( 'a' );
 
         cy.get( 'input[type=submit]' ).click();
     },
 
     logout: () => {
         cy.xpath( '//*[@id="wp-admin-bar-logout"]/a ').click({ force: true })
     },
 
     openAllOrdersView: () => {
         cy.visit( WP_ADMIN_ALL_ORDERS_VIEW )
     },
 
     openDashboard: () => {
         cy.visit( WP_ADMIN_DASHBOARD )
     },
 
     openNewCoupon: () => {
         cy.visit( WP_ADMIN_NEW_COUPON )
     },
 
     openNewOrder: () => {
         cy.visit( WP_ADMIN_NEW_ORDER )
     },
 
     openNewProduct: () => {
        StoreOwnerFlow.login();
         cy.visit( WP_ADMIN_NEW_PRODUCT )
     },
 
     openPermalinkSettings: () => {
         cy.visit( WP_ADMIN_PERMALINK_SETTINGS )
     },
 
     openPlugins: () => {
         cy.visit( WP_ADMIN_PLUGINS )
     },
 
     openSettings: ( tab, section = null ) => {
         let settingsUrl = WP_ADMIN_WC_SETTINGS + tab;
 
         if ( section ) {
             settingsUrl += `&section=${ section }`;
         }
 
         cy.visit( settingsUrl )
     },
 
     runSetupWizard: () => {
         cy.visit( WP_ADMIN_SETUP_WIZARD )
     }
 
 };
 
 export { CustomerFlow, StoreOwnerFlow };