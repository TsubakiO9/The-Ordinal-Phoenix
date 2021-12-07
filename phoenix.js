import { PHOENIX } from "./module/config.js";

// Importar Documentos
import ActorPhoenix from "./module/actor/entity.js";
import ItemPhoenix from "./module/item/sheet.js";
import { TokenDocumentPhoenix, TokenPhoenix } from "./module/token.js";

// Configuración Inicial de los Valores
CONFIG.PHOENIX = PHOENIX;
CONFIG.time.roundTime = 10;

// Hooks
Hooks.once("init", function () {
    console.log("PHOENIX | Initialising Ordinal Adventure");
    
    CONFIG.PHOENIX = PHOENIX;

    Items.unregisterSheet("core", ItemPhoenix);
    Items.registerSheet("PHOENIX", ItemPhoenix, { makeDefault: true });
});