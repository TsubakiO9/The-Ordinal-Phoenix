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
        label: "PHOENIX.SheetClassPNJ"
    });

    Actors.registerSheet("phoenix", ActorSheetPhoenixNPC, {
        types: ["NPC"],
        makeDefault: true,
        label: "PHOENIX.SheetClassNPC"
    });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("dnd5e", ItemSheetPhoenix, {
        makeDefault: true,
        label: "PHOENIX.SheetClassItem"
    });

 // Record Configuration Values:
 CONFIG.PHOENIX = PHOENIX;
 CONFIG.Actor.documentClass = ActorPhoenix;
 CONFIG.Item.documentClass = ItemPhoenix;
 CONFIG.time.roundTime = 10;

// Preload Handlebars Templates
    return preloadHandlebarsTemplates();
});

