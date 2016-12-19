import { AppState, Result, Score } from "../data/score";
import { div, hr } from "@cycle/dom/lib";
import inputField from "./inputField";
import renderResultBox from "./resultBox";

function view(state: any) {
    return state.map((appState: AppState) =>
        div(".container", [
            inputField(),
            hr(),
            renderResultBox(appState),
        ]),
    );
}

export default view;
