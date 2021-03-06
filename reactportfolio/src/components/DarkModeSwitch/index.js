import React, { useContext, useState } from 'react';
import {DarkModeContext} from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';

const DarkModeSwitch = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext);
    const colors = getColors(darkMode)
    const switchHandler = () => {
        setDarkMode(!darkMode)
    }
    const styles = {
        container: {
            display:'flex',
            alignItems:'center',
        },
        label:{
            fontFamily: 'Roboto',
            fontSize: 18,
            margin:0,
            color:colors.background
        },
        switchTrack:{
            width:60,
            height:30,
            padding:1,
            borderRadius:30,
            backgroundColor: colors.primary,
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            marginRight: 8,
            marginLeft: 8
        },
        switchOn:{
            height:30,
            width:30,
            borderRadius:100,
            backgroundColor: colors.secondary,
            position: 'relative',
            left:30,
            // alignSelf: 'flex-end',
            transition: 'left 0.5s'
        },
        switchOff:{
            height:30,
            width:30,
            borderRadius:100,
            backgroundColor: colors.third,
            position: 'relative',
            left:1,
            // alignSelf:'flex-start',
            transition: 'left 0.5s'
        }
    }
    return (
        <div style={styles.container}>
        <p style={styles.label}>Light</p>
        <a href="#">
        <div onClick={() => switchHandler()} style={styles.switchTrack}>
            <div onClick={() => switchHandler()} 
            style={darkMode ? styles.switchOn : styles.switchOff}>
            </div>
        </div>
        </a>
        <p style={styles.label}>Dark</p>
        </div>
    )
}

export default DarkModeSwitch;