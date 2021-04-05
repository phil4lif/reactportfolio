import React, { useState, useContext } from 'react';
import DarkModeContext from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';
import { FaAngleLeft } from 'react-icons/fa';
import DarkModeSwitch from '../DarkModeSwitch';
import SidePanelNav from '../SidePanelNav';

const OpenSidePanel = ({ setIsOpen, isOpen }) => {
    const { darkMode } = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    console.log(isOpen)
    const styles = {
        container: {
            height: 700,
            width: 300,
            backgroundImage: "url('/philandlinkandnavi.jpg')",
            // backgroundColor: colors.text,
            position: 'absolute',
            left: 0,
            zIndex: 1,
            borderWidth: 4,
            borderStyle: 'solid',
            borderColor: 'grey',
            transition: 'left 0.5s'
        },
        containerClosed: {
            height: 600,
            width: 300,
            backgroundColor: colors.text,
            position: 'absolute',
            left: -400,
            zIndex: 1,
            borderWidth: 4,
            borderStyle: 'solid',
            borderColor: 'grey',
            transition: 'left 0.5s'
        },
        text: {
            fontSize: 24,
            fontFamily: 'Roboto',
            color: colors.background,
            margin: 8
        },
        top: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        icon: {
            margin: 8
        }
    }
    return (
        <div style={isOpen ? styles.container : styles.containerClosed}>
            <div style={styles.top}>
                <a href="#">
                    <FaAngleLeft
                        style={styles.icon}
                        size={24}
                        color={colors.background}
                        onClick={() => setIsOpen(false)}
                    />
                </a>
            </div>
            <div>
                <SidePanelNav
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </div>
        </div>
    )
}

export default OpenSidePanel;