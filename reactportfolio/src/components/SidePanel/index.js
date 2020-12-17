import React, { useState, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import DarkModeContext from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';
import OpenSidePanel from '../OpenSidePanel';
const SidePanel = ({ isOpen, setIsOpen }) => {
    const { darkMode } = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    const styles = {
        container: {

        }
    }
    return (
        <div style={styles.container}>
            <a href="#">
                <FaBars onClick={() => setIsOpen(true)} color={colors.text} size={24} />
            </a>
        </div>
    )




}

export default SidePanel;