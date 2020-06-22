import React from 'react'

export default function PhilLogo() {
    return (
        <div>
            <p style={styles.nameStyle}>Phil Cowan</p>
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