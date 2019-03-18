if (typeof gTagLayer === 'undefined') {
    var gtag = document.createElement('script');

    gtag.src = 'https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID&l=gTagLayer';
    document.head.appendChild(gtag);

    try {
        window.gTagLayer = window.gTagLayer || [];
        function gtag() {
            window.gTagLayer.push(arguments);
            window.dataLayer.marketingID = window.dataLayer.marketingID || {};
            window.dataLayer.marketingID.accountID = window.dataLayer.marketingID.accountID || [];
            window.dataLayer.marketingID.eventID = window.dataLayer.marketingID.eventID || [];
            if (arguments[0] === 'config') {
                dataLayer.marketingID.accountID.push(arguments[1]);
                //console.log(arguments[1])
            } else if (arguments[0] === 'event') {
                window.dataLayer.marketingID.eventID.push(arguments[2].send_to);
            }
        }
        gtag('js', new Date());

    } catch (error) {//_satellite.logger.error(error);
    }
}

// Accounts will be a empty global variaccountsle which will get filled during runtime, when gtag is trying to fire an event. This wil help to ensure weather a particular acccount has already loaded or not.
//If that particular gTagAccounts library has not loaded it will fire gtag config command add the gTagAccounts id (DC-*******|AW-*******) in var gTagAccounts and then will evoke the event.
// Accounts will be an empty array during intial runtime.   

//If the function already loaded in previous instance don't run now.
//Check whether the config command has been inovoked for the particular gTagAccount or not. If loaded don't load now.
if (typeof accounts !== 'function') {
    var gTagAccounts = window.dataLayer.marketingID.accountID || [];
    var accounts = b=>{
        return new Promise((resolve,reject)=>{
            for (var i = 0; i < gTagAccounts.length + 1; i++) {
                //console.log(gTagAccounts[i]);
                if (gTagAccounts[i] === b) {
                    //console.log('Sorry! This gTagAccounts is already availaccountsle');
                    resolve('Config command is already invoked in previous instance');
                    return 'Config command is already invoked in previous instance';
                } else if (i === gTagAccounts.length) {
                    //console.log('Yayy this gTagAccounts is not availaccountsle');
                    gtag('config', b);
                    resolve('Config command is now invoked for this gTagAccount');
                    return 'Config command is now invoked for this gTagAccount'
                }
            }
        }
        )

    }

}

//These gTagAccounts will be retrieved from user input using launch extension.


accounts('DC-6587013').then(gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'send_to': 'DC-6587013/telus001/telus000+standard'
}));


accounts('DC-4402085');
accounts('AW-9415420');
accounts('AW-9386397');
accounts('DC-8005118');
accounts('AW-9333792');
accounts('AW-1064506');
accounts('AW-9393024');
accounts('AW-1046799');
accounts('AW-7947089');
accounts('AW-1066229');

gtag('event', 'conversion', {
    'send_to': 'AW-1064506604/hk1kCIaL-1wQ7KnM-wM'
});

gtag('event', 'conversion', {
    'send_to': 'AW-794708998/S8pKCLnI2YkBEIaY-foC'
});

// gtag('event', 'conversion', {
//     'allow_custom_scripts': true,
//     'send_to': 'DC-6587013/telus001/telus000+standard'
// });

gtag('event', 'conversion', {
    'send_to': 'AW-123456789/AbC-D_efG-h12_34-567',
    'value': 1.0,
    'currency': 'USD'
});

