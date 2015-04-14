# jquery-facebox

An asynchronous and unobtrusive [Facebook JavaScript SDK](https://developers.facebook.com/docs/reference/javascript/) loader for jQuery and Rails.

## Installation

Add this line to your application's Gemfile:

    gem 'jquery-facebook'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jquery-facebook

## Usage

Include in your `app/assets/javascripts/application.js`:

    //= require jquery.facebook

    jQuery(function ($) {
      $.facebookInit();
    });

It reads appId from `fb:app_id` meta tag by default:

    <meta property="fb:app_id" content="...">

Options passed to `facebookInit` call will be passed to `FB.init`:

    // defaults to:
    // {
    //   appId: '...', // appId from meta tag
    //   status: true,
    //   cookie: true,
    //   xfbml: true
    // }
    $.facebookInit();

    // to disable XFBML and logging
    $.facebookInit({xfbml: false, logging: false});

    // to override appId
    $.facebookInit({appId: '...'});

After facebook initialization is complete `facebook:init` event is being
triggered.

    $(document).live('facebook:init', function () {
      alert('Done!');
    });

Another way is to pass callback to the `$.facebookLoaded` function which will set
the facebook:init event handler if facebook isn't loaded yet and fire the
callback right away if it it.

    $.facebookLoaded(function () {
      alert('Done!');
    });

## Changelog

### v1.0.0

The default JS SDK version is 2.3 now.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
