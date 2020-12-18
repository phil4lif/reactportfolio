import React from 'react';

const Description = () => {
    const styles = {
        text:{
            fontFamily:'Roboto',
            fontSize:28,
            color:'#83BCDD',
        },
        container: {
            width: 380,
        }
    }
    return (
        <div style={styles.container}>
        <span style={styles.text}>Developer, Bassist, Audio Engineer, Dog Enthusiast, Naturalist, Friend, Record Collector, Movie/Popcorn Lover, Aspiring Concert Attendee</span>
        </div>
    )
}

export default Description;