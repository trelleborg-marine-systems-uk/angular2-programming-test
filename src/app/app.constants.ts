export let CONFIGURATION = {
    devConfig: {
        server: '10.58.228.116:8800', // API Server
        apiUrl: '/api/', // Path of the API Endpoint
        webSocketHost: '10.58.228.116:9000', // WebSocket server and port
    },
    prodConfig: {
        server: '10.58.228.116:8800',
        apiUrl: '/api/',
        webSocketHost: '10.58.228.116:9000'
    },
    useHttps: false, // Whether services should use HTTPS or not.
    useMockData: true, // Should services use mock data.
    isProduction: (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production'),
    pingInterval: 3000, // How often the application should check if brain is still alive.
    pingTimeout: 2000, // What the timeout for the brain ping should be.
    pollInterval: 5000, // How often data should be polled as a backup of WebSockets.
    longPollInterval: 60000, // How long before persisted data is polled for.
    minMaxFakeBrightness: [30, 100], // The min and max "fake" brightness applied to the app.
    authTokenName: 'SCREEN_TOKEN', // Auth token key name used for authentication.
    siteTitle: 'SSL10K', // Title displayed on the window.
    siteDefaultLang: 'en' // Default fallback language.
};
