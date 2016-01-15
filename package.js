Package.describe({
    name: 'leopradel:meteor-ionic-push',
    summary: 'Meteor package for sending push notifications via ionic push',
    version: '0.0.3',
    git: 'https://github.com/pradel/meteor-ionic-push.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['ecmascript', 'http'], 'server');
    api.addFiles('meteor-ionic-push.js', 'server');
    api.export(['IonicPush'], 'server');
});
