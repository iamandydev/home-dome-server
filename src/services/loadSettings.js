import fs from "fs";
import {join} from "path";

let settings = {};

export function loadSettings(__dirname){
    const filePath = join(__dirname, 'data/user_configs/user_settings.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    settings = JSON.parse(data);

    console.log('✅ Configuración cargada');
}

export function getSettings() {
  return settings;
}