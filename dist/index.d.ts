import { JSX as JSX_2 } from 'react/jsx-runtime';

/** @public
 * The notification preview component.
 *
 * Give it a platform, some meta-information like the application name or icon and a notification content
 * to display a preview matching what you should get on a physical device.
 */
export declare const NotificationPreview: (props: NotificationPreviewProps) => JSX_2.Element;

/** @public
 * Properties used by the NotificationPreview component.
 * They define what should be displayed, and for which platform it should display.
 */
export declare interface NotificationPreviewProps {
    /**
     * The platform to display the notification for.
     *
     * This fields lets you choose between an Android app, iOS app, or Website preview for multiple OSes.
     */
    platform: Platform;
    /**
     * The application name.
     *
     * Put your mobile application name as it appears on the phone.
     *
     * This information is not part of the notification but the surrounding environment.
     * Use by platforms: android, ios
     */
    appName?: string;
    /**
     * The notification title.
     *
     * Use by platforms: All
     */
    title?: string;
    /**
     * The notification subtitle.
     *
     * Use by platforms: ios
     */
    subtitle?: string;
    /**
     * The notification text.
     *
     * Use by platforms: All
     */
    text?: string;
    /**
     * The notification small icon.
     *
     * This field expects a URL.
     *
     * Use by platforms: All
     */
    icon?: string;
    /**
     * The notification big image.
     *
     * This field expects a URL.
     *
     * Use by platforms: All
     */
    image?: string;
    /**
     * The notification button labels.
     *
     * Use by platforms: All
     */
    buttons?: string[];
    /**
     * The notification badge.
     *
     * This field expects a URL.
     *
     * Use by platforms: android, ios
     */
    badge?: string;
    /**
     * The domain.
     *
     * Use by platforms: web:windows, web:android, web:macos
     */
    domain?: string;
    /**
     * Whether to hide the phone background in the preview.
     *
     * Use by platforms: All
     */
    hidePhone?: boolean;
    /**
     * Whether to force the notification preview to be expanded or collapsed.
     * When specified, all interactivity will be disabled.
     */
    forceState?: 'expanded' | 'collapsed';
}

/** @public
 * Supported platforms for previewing the notification.
 */
export declare enum Platform {
    /**
     * An iOS mobile application
     */
    IOS = "ios",
    /**
     * An Android mobile application
     */
    ANDROID = "android",
    /**
     * A Website browsed on Windows
     */
    WEB_WINDOWS = "web:windows",
    /**
     * A Website browsed on Android
     */
    WEB_ANDROID = "web:android",
    /**
     * A Website browsed on macOS
     */
    WEB_MACOS = "web:macos"
}

export { }
