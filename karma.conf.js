module.exports = function (config) {
    config.set({
      // ... outras configurações
      browsers: ['ChromeHeadless'], // Define Chrome Headless como navegador padrão
      customLaunchers: {
        ChromeHeadless: {
          base: 'Chrome',
          flags: ['--no-sandbox', '--disable-gpu', '--headless', '--disable-dev-shm-usage'],
        },
      },
    });
  };
  