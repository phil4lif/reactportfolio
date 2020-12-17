import React from 'react'

export default function RNProjects() {
    return (
        <div>
            <p style={styles.textStyle}>React Native Projects</p>
            <div style={styles.cardStyle}>
                <p style={styles.textStyle}>Foodie</p>
                <a target="_blank" href='https://github.com/phil4lif/ReactNativeFood'>github repo</a>
            </div>
            <div style={styles.cardStyle}>
                <p style={styles.textStyle}>Blog</p>
                <a target="_blank" href='https://github.com/phil4lif/rn-blog'>github repo</a>
            </div>
            <div style={styles.cardStyle}>
                <p style={styles.textStyle}>Foodie</p>
                <a target="_blank" href='https://github.com/phil4lif/ReactNativeFood'>github repo</a>
            </div>
            <div style={styles.cardStyle}>
                <p style={styles.textStyle}>Foodie</p>
                <a target="_blank" href='https://github.com/phil4lif/ReactNativeFood'>github repo</a>
            </div>
        </div>
    )
}


const styles = {
    cardStyle: {
        height: 250,
        width: 250,
        borderColor: 'grey',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 5
    },
    textStyle: {
        fontSize: 24,
        color: 'grey'
    }
}