import { id as moduleId } from "../../module.json";

export default class CrownInterface extends Application {
    static override get defaultOptions(): ApplicationOptions {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "crown-interface",
            title: "CROWN",
            template: `modules/${moduleId}/templates/crown.hbs`,
            width: 720,
            height: 720,
        }) as ApplicationOptions;
    }

    override getData(_?: Application.RenderOptions): object | Promise<object> {
        return {
            layers: []
        }
    }

    override activateListeners(html: JQuery): void {
        super.activateListeners(html);
    }


}
