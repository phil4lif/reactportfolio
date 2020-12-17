import React, {useState, useContext} from 'react';
import DarkModeContext from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';
import { FaAngleLeft } from 'react-icons/fa';

const OpenSidePanel = ({setIsOpen}) => {
    const {darkMode} = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    const styles = {
        container: {
            height:'100vh',
            width: 300,
            backgroundColor: colors.text,
            position: 'absolute',
            left:0,
            zIndex: 1,
            borderWidth: 4,
            borderStyle: 'solid',
            borderColor: 'grey'
        },
        text: {
            fontSize: 16,
            fontFamily:'Roboto',
            color: colors.background
        },
        top: {
            display: 'flex',
            flexDirection: 'row'
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.top}>
            <span>Phil Cowan</span>
            <FaAngleLeft onClick={() => setIsOpen(false)} />
            </div>
        </div>
    )
}

export default OpenSidePanel;