import {DOMSource} from "@cycle/dom";
import search from "./seacrhTweet";
/**
 * Created by dominik.kotecki on 19-12-2016.
 */


function intent(dom: DOMSource){
    return {
        searchTwweet: search
    }
}