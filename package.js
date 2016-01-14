Package.describe({
    name: 'leopradel:meteor-ionic-push',
    summary: 'Authorization package for Meteor',
    version: '0.0.1',
    git: 'https://github.com/pradel/meteor-ionic-push.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['ecmascript', 'http'], 'server');
    api.addFiles('meteor-ionic-push.js', 'server');
    api.export(['IonicPush'], 'server');
});
