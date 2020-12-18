import React, {useContext} from 'react'
import RNProjects from './RNProjects'
import getColors from '../styles/Styles'
import DarkModeContext from '../Context/DarkModeContext';

export default function PhilLogo() {
    const {darkMode} = useContext(DarkModeContext);
    const colors = getColors(darkMode);

    const styles = {
        nameStyle: {
            textAlign:'center',
            fontFamily: 'Roboto',
            fontSize: 44,
            color: '#83BCA9',
            margin:0
        },
        container: {
            // flex:1
        }
    }

    return (
        <div style={styles.container}>
            <p style={styles.nameStyle}>Phil Cowan</p>
        </div>
    )
}

