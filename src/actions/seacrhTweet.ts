import debounce from 'xstream/extra/debounce';
import { DOMSource } from "@cycle/dom/xstream-typings";
import {PortalUrl} from "../data/consts";

function search(source: DOMSource) {
    return source
            .select('.tweet')
            .events('input')
            .compose(debounce(500))
            .map(ev => (ev.target as any).value)
            .filter(query => (query as any).length > 0)
            .map(q => ({
                url: `${PortalUrl}/api/Tweet/${encodeURI(q as any)}`,
                category: 'sentiment'
            }));
}

export default search;