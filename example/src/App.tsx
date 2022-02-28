import './App.scss';
import React, { Component } from 'react';
import { Platform, NotificationPreview } from 'wonderpush-notification-preview';

const platformOptions = [
  {
    label: 'Android app',
    value: Platform.ANDROID,
  },
  {
    label: 'iOS app',
    value: Platform.IOS,
  },
  {
    label: 'Web on macOS',
    value: Platform.WEB_MACOS,
  },
  {
    label: 'Web on Windows',
    value: Platform.WEB_WINDOWS,
  },
  {
    label: 'Web on Android',
    value: Platform.WEB_ANDROID,
  },
];

interface AppStateStringFields {
  appName: string;
  title: string;
  subtitle: string;
  text: string;
  badgeUrl: string;
  smallImageUrl: string;
  bigImageUrl: string;
  buttonName1: string;
  buttonName2: string;
  buttonName3: string;
}
interface AppState extends AppStateStringFields {
  platform: Platform;
}

class App extends Component<{}, AppState> {

  constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      appName: 'ExampleApp',
      title: 'Notification Preview',
      subtitle: '',
      text: 'Preview your push notification',
      badgeUrl: '',
      smallImageUrl: 'https://cdn.by.wonderpush.com/assets/images/logo/logo-icon-plain-256x256.png',
      bigImageUrl: 'https://cdn.by.wonderpush.com/assets/images/logo/logo-icon-plain-256x256.png',
      buttonName1: 'Reply',
      buttonName2: 'Ignore',
      buttonName3: 'Cancel',
      platform: Platform.ANDROID,
    };
  }

  render() {
    // Handlers
    const handleChangeValue = <K extends keyof AppStateStringFields>(
        e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
        stateField: K
    ) => {
      if (e.target) {
        this.setState({ [stateField]: (e.target as HTMLInputElement || HTMLTextAreaElement).value } as Pick<AppState, K>);
      }
    };

    // States
    const { appName, title, subtitle, text, badgeUrl, smallImageUrl, bigImageUrl, buttonName1, buttonName2, buttonName3, platform } = this.state;

    // const getStateCallback = (field: string, value: TypeOf<AppState[field]>) => this.setState({ [field]: value });
    const formFields: {label: string, stateField: keyof AppStateStringFields, HTMLTag: string, className: string}[] = [
      {
        label: 'Your app name',
        stateField: 'appName',
        HTMLTag: 'input',
        className: 'app-name',
      },
      {
        label: 'Title',
        stateField: 'title',
        HTMLTag: 'textarea',
        className: 'title',
      },
      {
        label: 'Subtitle (only for ios)',
        stateField: 'subtitle',
        HTMLTag: 'textarea',
        className: 'subtitle',
      },
      {
        label: 'Text',
        stateField: 'text',
        HTMLTag: 'textarea',
        className: 'text',
      },
      {
        label: 'Badge',
        stateField: 'badgeUrl',
        HTMLTag: 'input',
        className: 'badge',
      },
      {
        label: 'Small image',
        stateField: 'smallImageUrl',
        HTMLTag: 'input',
        className: 'icon',
      },
      {
        label: 'Big image',
        stateField: 'bigImageUrl',
        HTMLTag: 'input',
        className: 'attached-image',
      },
      {
        label: 'Button 1',
        stateField: 'buttonName1',
        HTMLTag: 'input',
        className: 'button-name',
      },
      {
        label: 'Button 2',
        stateField: 'buttonName2',
        HTMLTag: 'input',
        className: 'button-name',
      },
      {
        label: 'Button 3',
        stateField: 'buttonName3',
        HTMLTag: 'input',
        className: 'button-name',
      },
    ];

    const platformProps = {
      appName: appName,
      title: title,
      subtitle: subtitle,
      text: text,
      icon: smallImageUrl,
      image: bigImageUrl,
      buttons: [buttonName1, buttonName2, buttonName3],
      badge: badgeUrl,
      platform: platform,
    };

    // Render
    return (
        <div className="App">
          <form className="form-notification-params">
            {formFields.map((field, index) => {
              return field.HTMLTag === 'input' ? (
                  <label key={index}>
                    {field.label}
                    <input
                        type="text"
                        value={this.state[field.stateField]}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            handleChangeValue(e, field.stateField)
                        }
                        className={field.className}
                    />
                  </label>
              ) : (
                  field.HTMLTag === 'textarea' && (
                      <label key={index}>
                        {field.label}
                        <textarea
                            value={this.state[field.stateField]}
                            onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                                handleChangeValue(e, field.stateField)
                            }
                            className={field.className}
                        />
                      </label>
                  )
              );
            })}

            <label>
              Platform
              <select
                  value={platform as Platform}
                  onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                      this.setState({ platform: (e.target as HTMLSelectElement).value as Platform })
                  }>
                {platformOptions.map((platform: any, index) => {
                  return <option key={index} value={platform.value}>{platform.label}</option>;
                })}
              </select>
            </label>
          </form>

          <NotificationPreview {...platformProps} />
        </div>
    );
  }

}

export default App;
