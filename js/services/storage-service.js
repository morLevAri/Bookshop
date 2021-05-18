'use strict'

function saveToStorage(key, value) {
    var json = JSON.stringify(value);
    localStorage.setItem(key, json);
}

// function saveToStorage(key, val) {
//     localStorage.setItem(key, JSON.stringify(val))
// }

function loadFromStorage(key) {
    var json = localStorage.getItem(key);
    var value = JSON.parse(json);
    return value;
}

// function loadFromStorage(key) {
//     var val = localStorage.getItem(key)
//     return JSON.parse(val)
// }
