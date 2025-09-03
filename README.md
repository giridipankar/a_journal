# a_journal - Your Personal Horoscope & Journaling App

a_journal is a modern mobile application that combines daily horoscopes with personal journaling, helping users reflect on their day and track their thoughts alongside astrological insights.

## Features

### Current Features

- **Daily Horoscope**: Get personalized daily horoscope readings
- **Horoscope Selection**: Choose your zodiac sign from an intuitive dropdown
- **Personal Journal**: Write and maintain daily journal entries
- **Journal History**: View and reflect on past journal entries
- **Persistent Storage**: Your zodiac sign preference and journal entries are saved locally
- **Clean UI**: Modern, minimalist interface focused on readability

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# User Experience & Flow

## Current User Journey

1. **First Launch**

   - Select your zodiac sign from the dropdown
   - View your daily horoscope
   - Navigate to journal section

2. **Journal Experience**
   - View list of previous journal entries
   - Create new entries with title and description
   - Read and reflect on past entries
   - Entries are automatically dated and saved

## Technical Architecture

- Built with React Native for cross-platform compatibility
- Uses AsyncStorage for persistent local storage
- Implements modern React patterns (hooks, functional components)
- Clean architecture with separated concerns (screens, components, services)

# Future Roadmap

## Phase 1: Enhanced Journaling (Q4 2025)

- [ ] Rich text editing in journal entries
- [ ] Add images to journal entries
- [ ] Journal entry categories/tags
- [ ] Search functionality
- [ ] Export journals to PDF/Text

## Phase 2: Advanced Horoscope Features (Q1 2026)

- [ ] Weekly/Monthly horoscope predictions
- [ ] Compatibility readings
- [ ] Detailed birth chart analysis
- [ ] Push notifications for daily horoscopes

## Phase 3: Social & Backup (Q2 2026)

- [ ] Cloud backup of journal entries
- [ ] Optional sharing of entries
- [ ] Community features
- [ ] Integration with social media
- [ ] Journal prompts and templates

## Phase 4: Premium Features (Q3 2026)

- [ ] Personalized astrological insights
- [ ] AI-powered journal analysis
- [ ] Mood tracking
- [ ] Custom themes
- [ ] Multiple language support

# Growth Strategy

## User Acquisition

- Focus on organic growth through App Store optimization
- Target astrology enthusiasts and journaling communities
- Implement referral program
- Social media presence and content marketing

## Retention Strategy

- Daily horoscope notifications
- Journal writing reminders
- Weekly insights and reflections
- Gamification elements

## Monetization Plan

1. **Freemium Model**

   - Basic features remain free
   - Premium features for subscribers
   - One-time purchases for specific features

2. **Premium Features**
   - Advanced astrological readings
   - AI-powered insights
   - Enhanced customization
   - Cloud backup
   - Ad-free experience

# Learn More

- [React Native Documentation](https://reactnative.dev)
- [Astrology API Documentation](https://docs.astrology-api.com)
- [Journal Writing Benefits](https://www.health.harvard.edu/mental-health/the-power-of-journaling)

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
