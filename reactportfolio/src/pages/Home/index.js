import React, { useState, useContext } from 'react'
import PhilLogo from '../../components/PhilLogo'
import {DarkModeContext} from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';
import DarkModeSwitch from '../../components/DarkModeSwitch';
import Header from '../../components/Header';
import OpenSidePanel from '../../components/OpenSidePanel';
import Footer from '../../components/Footer';
import EmailModal from '../../components/EmailModal';
import ModalTrigger from '../../components/ModalTrigger';

export default function Home() {
    const {darkMode} = useContext(DarkModeContext)
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(true);

    const colors = getColors(darkMode);

    const styles = {
        container: {
            display:'flex',
            flex:1,
            flexDirection: 'column',
        }
    }
    return (
        <div style={styles.container}>
            <Header setIsOpen={setIsOpen}/>
            <OpenSidePanel isOpen={isOpen} setIsOpen={setIsOpen} />
            <EmailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <Footer setModalOpen={setModalOpen} />
        </div>
    )
}