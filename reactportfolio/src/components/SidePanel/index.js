import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import DarkModeContext from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';


const SidePanel = ({ isOpen, setIsOpen }) => {
    const { darkMode } = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    
    return (
        <div>
            <a href="#">
                <FaBars onClick={() => setIsOpen(true)} color={colors.text} size={24} />
            </a>
        </div>
    )




}

export default SidePanel;