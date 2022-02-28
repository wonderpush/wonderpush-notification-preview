# WonderPush Notification Preview

Embeddable notification preview React components

## Installation

```sh
npm install wonderpush-notification-preview
```

Typings are included with the library.

## Usage with NodeJS and bundlers, inside a React app

Import:

```js
import { NotificationPreview } from 'wonderpush-notification-preview';
```

And place the component in your page:

```js
<NotificationPreview
    platform={'android'}
    appName={'MyApp'}
    title={'What\'s new?'}
    text={'We\'ve been working hard to bring you these amazing features!'}
    buttons={[ 'Check this out' ]}
/>
```

## Usage with HTML and `<script>` tags, outside a React app

1. Add the React scripts to your page `<head>`:

    ```html
    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.js" crossorigin></script>
    ```

    See [React's documentation _Add React to a Website_](https://reactjs.org/docs/add-react-to-a-website.html)
    for more options.

3. Add the library script to your page `<head>`:

    ```html
    <script src="node_modules/wonderpush-notification-preview/index.min.js"></script>
    ```

    Note: Adjust the script's `src` attribute to point at the location where you installed this library.

4. Add a placeholder element in your page `<body>`:

    ```html
    <div id="notification-preview"></div>
    ```

5. Run this to flesh out the component:

    ```html
    <script>
      ReactDOM.render(
              React.createElement(WonderPushNotificationPreview.NotificationPreview, {
                  platform: 'android',
                  appName: 'MyApp',
                  title: 'Notification Preview',
                  text: 'Preview your push notification',
                  buttons: [
                      'Reply',
                      'Ignore',
                      'Cancel',
                  ],
              }),
              document.getElementById('notification-preview')
      );
    </script>
    ```

    You can run this at the appropriate time when the component comes into view,
    or simply place it at the bottom of your page `<body>`.
