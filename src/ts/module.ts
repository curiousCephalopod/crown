import "../styles/style.scss";
import { id as moduleId } from "../module.json";
import CrownInterface from "./apps/crownInterface";


interface CrownModule extends Game.Module {
    crownInterFace: CrownInterface;
}

let module: CrownModule;

Hooks.once("init", () => {
    console.log(`Initialising ${moduleId}`);

    module = (game as Game).modules.get(moduleId) as CrownModule;
    module.crownInterFace = new CrownInterface();
})

Hooks.on('renderActorSheet5eCharacter', (_: ActorSheet5eCharacter, html: JQuery, data: Data) => {
    if (data.owner) {
        const title = html.find('h4.window-title');
        title.after(
            "<a class='crown-open'><i class='fas'>CROWN</i></a>"
        );
        
        html.on('click', '.crown-open', () => module.crownInterFace.render(true));
    }
})
