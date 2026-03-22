```
C:.
│   app.js
│   server.js
│   
├───assets
│   └───styles
│           Air_Styles.css
│           Apps_styles.css
│           Assistant_styles.css
│           BottomBar_styles.css
│           Camera_styles.css
│           Home_styles.css
│           LedsManager.css
│           MusicPlayer_styles.css
│           SideBar_styles.css
│           Weather_styles.css
│           WifiDevices_styles.css
│
├───data
│   ├───user_configs
│   │       user_settings.json
│   │
│   ├───user_files
│   └───wallpapers
│           carlos-aranda-cu9FlL_jTE8-unsplash.jpg
│           felix-rottmann-BaFoAsawNcI-unsplash.jpg
│           felix-rottmann-BfiXzJQ-7zQ-unsplash.jpg
│           felix-rottmann-coHaj0yeeno-unsplash.jpg
│           kevindous-CZuFcpDWbOM-unsplash.jpg
│           simon-hurry-fWoYYV5ILy8-unsplash.jpg
│
├───interfaces
│   │   dashboard.ejs
│   │   home_view.ejs
│   │   me-sirve.ejs
│   │   player_view.ejs
│   │   settings_view.ejs
│   │   storage_view.ejs
│   │   weather_view.ejs
│   │
│   ├───components
│   │       air_component.ejs
│   │       apps_widget.ejs
│   │       camera_component.ejs
│   │       homeAssistant_component.ejs
│   │       ledsManager.ejs
│   │       music_component.ejs
│   │       weather_component.ejs
│   │       wifiDevices_component.ejs
│   │
│   └───layout
│           bottomBar_layout.ejs
│           sideBar_layout.ejs
│           topBar_layout.ejs
│
│           topBar_layout.ejs
│           topBar_layout.ejs
│
├───routes
│       index.routes.js
│
└───services
        settings.service.js
```

## 1. Root path
`app.js`
- Middlewares (express.json, morgan, etc.).
- Routes.
- Static files.
- View Engine (EJS).

`server.js`
- Up the server.

---

## 2. `/assets` (frontend)
- Static frontend elements.
- Example: `/assets/styles/Home_styles.css`.

---

## 3. `/data` (storage)

### `user_configs/`
- Storage data settings of user, ui, and other preferences.
`user_settings.json`

### `user_files/`
- Files Uploaded by user.

### `wallpapers/`
- Dinamic images from background.

---

## 4. `/interfaces` (EJS views)
This is the frontend of the server.

`home_view.ejs`
- show the panel of control.

`settings_view.ejs`
- show a view with settings that you can modify, to adjust your experience.

### `/components`
- keep fragments of ejs code to reuse how components.

### `/layout`
- keep the ejs elements that component the layout

---

## 5. `/routes`
`index.routes.ejs`

---

## 6. `/services`
- Read & Process data

`settings.service.js`
- read the user_settings.json to use data.

[Next page ➡️](./user-flow.md)