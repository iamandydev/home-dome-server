import { loadSettings } from "./services/loadSettings.js";
import express from "express";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

//Archivo de rutas
import router from "./routes/index.routes.js";

const __filename = fileURLToPath(import.meta.url);
// Obtiene el directorio (carpeta) donde se encuentra este archivo
const __dirname = dirname(__filename);

// App
const app = express();
//load settings to start
loadSettings(__dirname);
// Middleware de logging: muestra en consola las peticiones HTTP (GET, POST, etc.)
app.use(morgan("dev"));
// Middleware para parsear JSON en las peticiones (req.body)
app.use(express.json());
// Middleware para parsear datos de formularios (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));


// Usa las rutas definidas en "router" para la ruta raíz "/"
app.use("/", router);
// Sirve archivos estáticos desde la carpeta "assets"
// Ej: http://localhost:3000/styles/archivo.css
app.use(express.static(join(__dirname, "./assets")));
// Define la carpeta donde están las vistas (templates)
app.set("views", join(__dirname, "interfaces"));
// Define el motor de plantillas (en este caso EJS)
app.set("view engine", "ejs");

// Sirve archivos estáticos desde "data/user_files" bajo la ruta "/storage"
// Ej: http://localhost:3000/storage/archivo.png
app.use('/storage', express.static(join(__dirname, './data/user_files/')));

// Sirve imágenes desde "data/wallpapers" bajo la ruta "/wallpapers"
// Ej: http://localhost:3000/wallpapers/fondo.jpg
app.use('/wallpapers', express.static(join(__dirname, './data/wallpapers/')));

// Exporta la app para usarla en otros archivos (por ejemplo, el servidor)
export default app;