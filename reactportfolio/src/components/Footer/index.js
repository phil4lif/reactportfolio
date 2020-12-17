import React, { useContext } from 'react'
import getColors from '../../styles/Styles';
import { FaStackOverflow, FaInstagram, FaSpotify, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import DarkModeContext from '../../Context/DarkModeContext';

const Footer = () => {
    const { darkMode } = useContext(DarkModeContext);
    const colors = getColors(darkMode);
    const styles = {
        container: {
            backgroundColor: colors.background,
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            flex: 1,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
            paddingBottom: 24,
            paddingTop: 24
        },
        icon: {
            margin: 8
        },
        width: {
            width: 20
        }
    }
    return (
        <div style={styles.container}>
            <div>
                <a target="_blank" href="https://www.github.com/phil4lif">
                    <FaGithub style={styles.icon} size={40} color={colors.text} />
                </a>
                <a target="_blank" href="https://stackoverflow.com/users/12120114/philcowan">
                    <FaStackOverflow style={styles.icon} size={40} color={colors.text} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/philip-cowan/">
                    <FaLinkedinIn style={styles.icon} size={40} color={colors.text} />
                </a>
                <a target="_blank" href="https://open.spotify.com/artist/6rUljU0Lgfh5Vw0S98wD6W">
                    <FaSpotify style={styles.icon} size={40} color={colors.text} />
                </a>
                <a target="_blank" href="https://www.instagram.com/phil4lif/">
                    <FaInstagram style={styles.icon} size={36} color={colors.text} />
                </a>
            </div>
        </div>
    )
}

export default Footer;