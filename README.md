# Tontine-241

This is the starter project structure for the Tontine+241 mobile application.

## Project Structure

```
Tontine-241/
│
├── backend/
│   ├── firebase/
│   │   ├── firebaseConfig.js
│   │   └── authService.js
│   └── supabase/
│       ├── supabaseClient.js
│       └── authService.js
│
├── mobile/
│   ├── react_native/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   └── CustomButton.js
│   │   ├── navigation/
│   │   │   └── AppNavigator.js
│   │   ├── screens/
│   │   │   └── HomeScreen.js
│   │   ├── services/
│   │   │   └── paymentService.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   └── package.json
│   └── flutter/
│       ├── lib/
│       │   ├── main.dart
│       │   ├── components/
│       │   │   └── custom_button.dart
│       │   ├── screens/
│       │   │   └── home_screen.dart
│       │   └── services/
│       │       └── payment_service.dart
│       └── pubspec.yaml
│
├── web/
│   ├── index.html
│   ├── App.js
│   ├── components/
│   │   └── CustomButton.js
│   ├── routes/
│   │   └── apiRoutes.js
│   ├── services/
│   │   └── paymentService.js
│   └── package.json
│
├── env/
│   ├── .env.development
│   └─�� .env.production
│
├── auth/
│   ├── otp/
│   │   ├── otpService.js
│   └── config/
│       ├── firebase_oauth.js
│       └── supabase_oauth.js
│
├── database/
│   └── schema.sql
│
└── README.md
```

## How to Get Started

1. Clone this repository.
2. Navigate into the `Tontine-241` directory.
3. Install dependencies for the respective applications (React Native, Flutter, Web).

## License

MIT License (or specify your own license)