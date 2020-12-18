import React from 'react';
import Description from '../Description';
import PhilLogo from '../PhilLogo';

const Bodice = () => {
    const styles = {
        container: {
            display:'flex',
            flex:1,
            marginTop:160,
            marginLeft:20,
            marginRight:20,
            justifyContent:'center',
            alignItems:'flex-start',
            flexDirection:'row',
        },
        spacer: {
            width:48
        }
    }
    return (
        <div style={styles.container}>
            <PhilLogo />
            <div style={styles.spacer} />
            <Description />
        </div>
    )
}

export default Bodice;