module.exports = {
    testDir: './tests', // Directory where tests will be located
    timeout: 30000, // Test timeout
    expect: {
        timeout: 5000,
    },
    fullyParallel: true, // Run tests in parallel
    retries: 1, // Number of retries for failed tests
    reporter: 'list', // Report results in the console
    use: {
        baseURL: 'https://is-219-final-bgckn3ih5-froggychop100aolcoms-projects.vercel.app/', // Base URL for the tests
        trace: 'on-first-retry', // Enable tracing for debugging
    },
};
