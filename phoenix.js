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
    console.log(`Phoenix | Initializing Ordinal Adventure System\n${PHOENIX.ASCII}`);
     // Record Configuration Values:
    CONFIG.PHOENIX = PHOENIX;
    CONFIG.Actor.documentClass = ActorPhoenix;
    CONFIG.Item.documentClass = ItemPhoenix;
    CONFIG.time.roundTime = 10;

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

   // Iniciativa:
   CONFIG.Combat.initiative.formula = "1d20 + @attributes.init.mod + @attributes.init.prof + @attributes.init.bonus + @abilities.dex.bonuses.check + @bonuses.abilities.check";
   Combatant.prototype._getInitiativeFormula = _getInitiativeFormula;
});

