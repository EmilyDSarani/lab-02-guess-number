export function comparison(expected, correctNumber)

{if (expected === correctNumber) {
    return 0;
} else if (expected > correctNumber) {
    return 1;
} else if (expected < correctNumber) {
    return -1; 
} else {
    return correctNumber;
}
}