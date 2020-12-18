import React, {useState, useContext} from 'react';
import DarkModeContext from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';
import ContactForm from '../ContactForm';
const EmailModal = ({modalOpen, setModalOpen}) => {
    const {darkMode} = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    console.log(modalOpen)
    const styles= {
        modalContainerOpen: {
            display: 'flex',
            flexDirection: 'column',
            alignSelf:'center',
            marginTop: 24,
            padding:8,
            zIndex:99,
            backgroundColor: '#83BCA977',
            height:300,
            width: 400,
            visibility: 'visible',
            borderRadius: 30
        },
        modalContainerClosed: {
            visibility: 'hidden',
            height: 0
        },
        text: {
            fontFamily:'Roboto',
            fontSize: 16,
            color: colors.background
        },
        button: {
            marginTop:8,
            alignSelf: 'center',
            borderRadius:15,
            width: 60
        }
    }
    const closeHandler = () => {
        setModalOpen(false);
    }
    return (
        <div style={modalOpen ? styles.modalContainerOpen : styles.modalContainerClosed}>
            <ContactForm setModalOpen={setModalOpen}/>
            <button style={styles.button} onClick={() => closeHandler()}><span style={styles.text}>Cancel</span></button>
        </div>
    )
}

export default EmailModal;

