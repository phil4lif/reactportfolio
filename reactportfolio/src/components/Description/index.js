import React from 'react';

const Description = () => {
    const styles = {
        text:{
            fontFamily:'Roboto',
            fontSize:24,
            color:'#83BCA9',
        },
        container: {
            width: 300

        }
    }
    return (
        <div style={styles.container}>
        <span style={styles.text}>Developer, Bassist, Dog Enthusiast, Naturalist, Friend, Record Collector</span>
        </div>
    )
}

export default Description;