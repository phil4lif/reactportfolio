import React, {useState, useContext} from 'react';
import DarkModeContext from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';

const EmailModal = ({modalOpen, setModalOpen}) => {
    const {darkMode} = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    console.log(modalOpen)
    const styles= {
        modalContainerOpen: {
            backgroundColor: colors.background,
            height:400,
            width: 200,
            visibility: 'visible',
            transition: 'visibility 0.4s'
        },
        modalContainerClosed: {
            visibility: 'hidden',
            transition: 'visibility 0.3s'
        },
        text: {
            fontSize: 24,
            color: colors.text
        }
    }
    const closeHandler = () => {
        setModalOpen(false);
    }
    return (
        <div style={modalOpen ? styles.modalContainerOpen : styles.modalContainerClosed}>
            <span style={styles.text}>This is a modal that will hold the contact form</span>
            <button onClick={() => closeHandler()}>Close</button>
        </div>
    )
}

export default EmailModal;

