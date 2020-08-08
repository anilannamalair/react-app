export default function pickNumber() {
    let i = 0;
    i = i++; // Noncompliant; i is still zero

    return i++; // Noncompliant; 0 returned
}