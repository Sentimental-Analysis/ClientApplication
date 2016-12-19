import { Actions } from "../data/global";
import { PortalUrl } from "../data/consts";
import debounce from "xstream/extra/debounce";
import { DOMSource } from "@cycle/dom";


function intent(dom: DOMSource): Actions {
    const inputChanged = dom
        .select(".tweet")
        .events("input")
        .compose(debounce(500))
        .map((ev: Event) => (ev.target as any).value);

    const searchTweet = inputChanged
        .filter((query: any) => (query as any).length > 0)
        .map((q: any) => ({
            category: "sentiment",
            url: `${PortalUrl}/api/Tweet/${encodeURI(q)}`,
        }));

    return {
        searchTweet,
        queryChange: inputChanged,
    }
}

export default intent;