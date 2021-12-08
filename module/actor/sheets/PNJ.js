import ActorSheetPhoenix from "./base.js";

export default class ActorSheetPhoenixPNJ extends ActorSheetPhoenix {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
          classes: ["phoenix", "sheet", "actor", "PNJ"],
          width: 720,
          height: 680
        });
      }
}