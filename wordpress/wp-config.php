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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
//define('DB_NAME', 'database_name_here');
define('DB_NAME', 'wordpress');

/** MySQL database username */
//define('DB_USER', 'username_here');
define('DB_USER', 'wordpress');

/** MySQL database password */
//define('DB_PASSWORD', 'password_here');
define('DB_PASSWORD', 'aph5MqmikdtxVbAv');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
// define('AUTH_KEY',         'put your unique phrase here');
// define('SECURE_AUTH_KEY',  'put your unique phrase here');
// define('LOGGED_IN_KEY',    'put your unique phrase here');
// define('NONCE_KEY',        'put your unique phrase here');
// define('AUTH_SALT',        'put your unique phrase here');
// define('SECURE_AUTH_SALT', 'put your unique phrase here');
// define('LOGGED_IN_SALT',   'put your unique phrase here');
// define('NONCE_SALT',       'put your unique phrase here');
define('AUTH_KEY',         '51U!S-H7Z2>;Fi)aS~6W;hYO&qMmThzS=E4uD]AX.T}7-$qjA?,H>}3DC^gDyJ=/');
define('SECURE_AUTH_KEY',  '/@62:O6r%V1RSynD[wi|j#9X6f*P=1&AQ8W)?5^m?~V~BE}o$fBdmx 9Fc}:N?c<');
define('LOGGED_IN_KEY',    '{SQ1c2{N F#jbh$%:@%5 + 5-a6W:(V7299Zt62U3oU;2GTk44K^i[j-;}%7T:+|');
define('NONCE_KEY',        '+NEF}8RId,K+Aw-,!h*w dP~[,9K<O6aHmc>4^d4n_odz5`uM]hM+ukeS2E[N.~X');
define('AUTH_SALT',        'VoqUxP@iV;eJ-,g361A^YB}sd_Q[[I%YtWGSS_?H<8Yk{}!9-,>Md=+x_^h2!}k_');
define('SECURE_AUTH_SALT', 'Ex|-L-;@,6_n5l:UsJDG]n9HD?%bMN:@KH~.;ldtELnLitfe48}i^GU88~%7+0i_');
define('LOGGED_IN_SALT',   '^*u8WGj_W~I5^U&Kv0Vhx*|o#j/%mdT=|sAX{ObyI|,O>hA,u<FLC60#6(@,vG;%');
define('NONCE_SALT',       'Jt-dT.)m1ybrb6pr!QtZ>jaWo;v7:+Y%!`eO?]:4v/a)nf~p{z]8f@*jJ|X{VW,r');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
