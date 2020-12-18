import React, { useState, useContext } from 'react'
import {DarkModeContext} from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';
import Header from '../../components/Header';
import OpenSidePanel from '../../components/OpenSidePanel';
import Footer from '../../components/Footer';
import EmailModal from '../../components/EmailModal';
import PhilLogo from '../../components/PhilLogo';
import Bodice from '../../components/Bodice';

export default function Home() {
    const {darkMode} = useContext(DarkModeContext)
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const colors = getColors(darkMode);

    const styles = {
        container: {
            display:'flex',
            height:'100vh',
            flexDirection: 'column',
            backgroundImage: "url('/woods.jpg')",
            backgroundSize: 'cover'
        }
    }
    return (
        <div style={styles.container}>
            <Header setIsOpen={setIsOpen}/>
            <OpenSidePanel isOpen={isOpen} setIsOpen={setIsOpen} />
            <EmailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <Bodice />
            <Footer setModalOpen={setModalOpen} />
        </div>
    )
}