Usual user flow:
`user → route → service → data → view`

Real example:

User access to `/settings` route
app call to `routes/index.routes.js` 
and get `settings.service.js`
read `data/user_configs/user_settings.json`
render `settings_view.ejs`.
