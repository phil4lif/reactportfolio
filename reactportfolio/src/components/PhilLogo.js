import React from 'react'
import RNProjects from './RNProjects'
export default function PhilLogo() {
    return (
        <div>
            <p style={styles.nameStyle}>Phil Cowan</p>
            <RNProjects />
        </div>
    )
}

const styles = {
    nameStyle: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: 'grey'
    }
}