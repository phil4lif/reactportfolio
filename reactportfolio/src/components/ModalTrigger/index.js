import React, { useState, useContext } from 'react';
import DarkModeContext from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';
import { FaMailBulk } from 'react-icons/fa';


const ModalTrigger = ({ setModalOpen }) => {
    const { darkMode } = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    const openModal = () => {
        setModalOpen(true);
    }
    const styles = {
        icon: {
            margin:8
        }
    }

    return (
        <a href='#'>
            <FaMailBulk 
            onClick={() => openModal()} 
            style={styles.icon}
            size={36} 
            color={colors.text} />
        </a>
    )
}

export default ModalTrigger;