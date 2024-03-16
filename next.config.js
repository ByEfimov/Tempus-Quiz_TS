//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  env: {
    FIREBASE_API_KEY: 'AIzaSyB8MIMYrVvkeNAp-GxOXwVWyuuDjsrLrh0',
    FIREBASE_AUTH_DOMAIN: 'tempus-one-4d017.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://tempus-one-4d017-default-rtdb.firebaseio.com',
    FIREBASE_PROJECT_ID: 'tempus-one-4d017',
    FIREBASE_STORAGE_BUCKET: 'tempus-one-4d017.appspot.com',
    FIREBASE_MESSEGING_SENDER_ID: '970346931411',
    FIREBASE_APP_ID: '1:970346931411:web:2cd20546559ebbe775e026',
    FIREBASE_MEASURENENT_ID: 'G-4MJ6BGJ06J',
    TEMPUS_CRIPTO_KEY: 'T3mPUsK3y@$$',
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
