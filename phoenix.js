// Import Modules:
import {PHOENIX} from "./module/config.js";


// Import Documents:


// Import Applications:
import ActorSheetPhoenixPNJ from "./module/actor/sheets/.js";
import ActorSheetPhoenixNPC from "./module/actor/sheets/.js";
import ItemSheetPhoenix from "./module/item/sheet.js";


/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", function() {
    console.log(`PHOENIX | Initializing the DnD5e Game System\n${PHOENIX.ASCII}`);

// Registro de plantillas:
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("phoenix", ActorSheetPhoenixPNJ, {
        types: ["PNJ"],
        makeDefault: true,
    });

    Actors.registerSheet("phoenix", ActorSheetPhoenixNPC, {
        types: ["NPC"],
        makeDefault: true,
    });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("phoenix", ItemSheetPhoenix, {
        makeDefault: true,
    });

 // Record Configuration Values:
 CONFIG.PHOENIX = PHOENIX;
 CONFIG.Actor.documentClass = ActorPhoenix;
 CONFIG.Item.documentClass = ItemPhoenix;
 CONFIG.time.roundTime = 10;

// Preload Handlebars Templates
    return preloadHandlebarsTemplates();
});

