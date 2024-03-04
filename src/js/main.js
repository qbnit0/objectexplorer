import '../scss/style.scss'

import * as bootstrap from 'bootstrap'
import Handlebars from 'handlebars';

import items from '../json/items.json';
import fileitem from '../template/fileitem.hbs'

const render = () => {
    // Get current path like https://example.com/index.html#currentPath
    const currentPath = window.location.hash.substring(1) || ""

    const pathItems = items[currentPath]

    // If an invalid path was specified, redirect to root ("") and retry
    if(!pathItems) {
        window.location.hash = "#"
        return
    }

    if(currentPath == "") {
        document.getElementById("backbutton").classList.add("d-none")
    } else {
        document.getElementById("backbutton").classList.remove("d-none")
    }

    // Render template
    var output = ""
    pathItems.forEach(element => {
        output += fileitem(element)
    });
    document.getElementById("filedisplay").innerHTML = output
}

window.addEventListener("load", render)
window.addEventListener("hashchange", render)