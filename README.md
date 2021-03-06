# Ionic Push for Meteor

Meteor package for sending push notifications via [ionic push](http://docs.ionic.io/docs/push-quick-start)

## Installation
    meteor add leopradel:meteor-ionic-push

## Example
    // Config Ionic Push service
    Meteor.startup(function() {
        IonicPush.config('your_ionic_app_id', 'your_ionic_app_secret');
    });
    
    // Send notification in method
    Meteor.methods({
        sendMessage: function (message) {
            // Notify your users a new message is in chat
            var my_users_token = ... // Get an array of your users device tokens
            IonicPush.send({
                'tokens': my_users_token,
                'notification': {
                    'alert': message
                }
            });
        }
    });

## API
* `config(app_id, app_secret)`
Configure IonicPush package

* `send(params)`
Send a new push notification to ionic

* `checkPushStatus(message_id)`
Check the status of a queued push notification