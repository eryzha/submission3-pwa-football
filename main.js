var webPush = require('web-push');

var pushSubscription = {
    "endpoint": "https://android.googleapis.com/gcm/send/djQbRdimJkM:APA91bGxovfkHqdn-B2Yn7QEYv79wvyB2aAqc6XCQgIz2Fv_klYHz4iK6AZdNMKB8HRc5n5zwLW9nqVVNBZqlMDsRRhFyQyfNqVFCoNqPy3Bl71ZWH5TC1bbD47ylo5_TcFNrdN7JQZn",
    "keys": {
        "p256dh": "BN/OjjUwGKkXR8rYhT0MyHnBSN83KyZuf//LxW2XnkXP8ISiTDL4HJIJBmuIXfjvKekESbjsi9l1Vmvtnm0JvOQ=", 
        "auth": "aMQ5MhsAnfAsCb/PXFo//w=="
    }
};

var payload = 'Here is a payload!';

var options = {
    gcmAPIKey: 'AIzaSyAc2e6gihvgNlLjY-ON3UzhriHX7bAoqk4',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);