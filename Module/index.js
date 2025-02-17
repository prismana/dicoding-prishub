/**
 * bisa juga menggunakan import var from "file location" dalam mengimport module
 */

//menggunakan teknik desctucturing objek untuk mengimport multi nilai dari module
import {coffeStock, isCoffeMachineReady as statusMesin} from "./state.js"

const displayStock = stock => {
    for (const type in stock) {
        console.log(type)
    }
}

displayStock(coffeStock)

console.log(statusMesin)