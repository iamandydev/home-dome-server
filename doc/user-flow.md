🔗 Cómo se conecta todo

Flujo típico:

Usuario → Ruta → Servicio → Datos → Vista

Ejemplo real en tu app:

Usuario entra a /settings
routes/index.routes.js
llama a settings.service.js
lee data/user_configs/user_settings.json
renderiza settings_view.ejs