"use stric";

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// hard coded false on purpose
// to elaborate the unit test
function isTruthy() {
    return false;
}

function person(name, age) {
    // should never pass
    // so test can stub to pass
    if ( isTruthy ) {
        return {
            "name": name,
            "age": age
        }
    }
}