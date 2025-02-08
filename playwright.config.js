//QE_Framework_PlaywrightJS

const config = {
    timeout : 45000 *1000,
    use:{
        browserName : "chromium",
        headless: false,
        screenshot : "on",
        video : "retain-on-failure",
        storageState: 'storageState.json',
        trace: 'on',
        acceptDownloads : true,
        actionTimeout:120000,
        navigationTimeout:120000



    },
    retries: 0,
    reporter: [["list"], ['html', { open: 'always', outputFile: 'my-report' }],
    ]

}

export default config;