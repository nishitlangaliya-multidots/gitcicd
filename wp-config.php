<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link    https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp48' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY', 'Q_afsPd>Qkj64fp22v@DUiYnsUJ$xB@g]hVF4rh!()Ip;sCJ`1ft&1a*plFgwi6m' );
define( 'SECURE_AUTH_KEY', 'Dwykl#!Xr^3$wEH7.c7;lUc{0WMpOv#a0ci)F2*L8=&PE|b;98]Rvo3Ufwqk=`sA' );
define( 'LOGGED_IN_KEY', 'B<;0[Q$K?(1%*)?/=rz!Wzaj1&B!x11Gx} [i(ptjjHYYF=DHQ<R+T_[zpXq:XR!' );
define( 'NONCE_KEY', ']D%Gm =4IQ(uX_$*p[N%}qY[aGt[T*g=1cxLn,eKGGnF% J@d75`ud{`S$Q>UKcB' );
define( 'AUTH_SALT', 'e`!iF-+=>$Ng_<IEz^)faFx65gCbrr0G0,72yaD;-0WbEr)5#2.d-:E>)^px|yF}' );
define( 'SECURE_AUTH_SALT', '*Vw7wl$tZ0Ofp2hHqc0AyKIR;=Hb]eL/m5$~5n>S.1A!(8WUHrR3J7`S,0,>zvjZ' );
define( 'LOGGED_IN_SALT', 'LEmn^tP*=.f4RXo6}7:yib_Yy5B{KS+dKknvPzzM!H[48+wN[b~EIJ@_-u*t(N>)' );
define( 'NONCE_SALT', ',B6I:j#_i(#+=7S@/G,tF7. OT;#G5#;36<+!ACYBM12/R32$f)Idk(t#+|;[:N6' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

