export default function func1() {
    let arr = ["a", "b", "c"];

    let expectedValue = "b";
    if (expectedValue in arr) { // Noncompliant, will be always false
        return expectedValue + " found in the array";
    } else {
        return expectedValue + " not found";
    }
}

function func2() {
    let arr = ["a", "b", "c"];

    let expectedValue = "1"; // index #1 is corresponding to the value "b"
    if (expectedValue in arr) { // Noncompliant, will be always true because the array is made of 3 elements and the #1 is always there whatever its value
        return expectedValue + " found in the array";
    } else {
        return expectedValue + " not found";
    }
}