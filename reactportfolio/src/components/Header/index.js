import React, { useContext } from 'react';
import PhilLogo from '../PhilLogo';
import getColors from '../../styles/Styles';
import DarkModeContext from '../../Context/DarkModeContext';
import DarkModeSwitch from '../DarkModeSwitch';
import SidePanel from '../SidePanel';

const Header = ({isOpen, setIsOpen}) => {
    const { darkMode } = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    const styles = {
        container: {
        display: 'flex',
        flex: 1,
        height:60,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        padding:8,
        flexWrap: 'wrap',
        backgroundColor: colors.background
        },
        width: {
            width:1
        }
    }
    return (
        <div style={styles.container}>
            <SidePanel setIsOpen={setIsOpen}/>
            <PhilLogo />
            <DarkModeSwitch />
        </div>
    )
}

export default Header;