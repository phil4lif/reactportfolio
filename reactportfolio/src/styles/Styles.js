import React from 'react';
const Colors = {
    darkest:'#282B28',
    greenish: '#3E5641',
    redish: '#A24936',
    orange: '#D36135',
    blueish: '#83BCA9'
}
const darkColors = {
    background:Colors.darkest,
    text:Colors.blueish,
    primary:Colors.greenish,
    secondary:Colors.orange,
    third: Colors.redish
}

const lightColors = {
    background:Colors.blueish,
    text:Colors.darkest,
    primary: Colors.orange,
    secondary: Colors.greenish,
    third: Colors.redish



}

export default function getColors(darkMode) {
    return darkMode ? darkColors : lightColors;
}