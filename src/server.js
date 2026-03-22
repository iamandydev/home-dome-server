// Importa la configuración principal de la aplicación (Express)
import app from "./app.js";

// Verifica si NO estamos en producción y tampoco en Vercel
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {

  // Define el puerto: usa el del entorno o 3000 por defecto
  const PORT = process.env.PORT || 3000;

  // Inicia el servidor y queda escuchando peticiones
  app.listen(PORT, () => {

    // Muestra un mensaje en consola indicando que el servidor está activo
    console.log(`Sistema inicializado http://localhost:${PORT}`);
  });
}

// Exporta la app
export default app;