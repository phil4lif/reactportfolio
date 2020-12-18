import React, { useState, useContext } from 'react';
import DarkModeContext from '../../Context/DarkModeContext';
import getColors from '../../styles/Styles';

const ContactForm = ({ setModalOpen }) => {
  const [status, setStatus] = useState('')
  const { darkMode } = useContext(DarkModeContext);

  const colors = getColors(darkMode);

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  }

  const styles = {
    text: {
      fontFamily: 'Roboto',
      fontSize: 16,
      color: colors.background
    },
    buttonRow: {
      display:'flex',
      flexDirection:'row',
      marginTop:8
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems:'center'
    },
    messageInput: {
      height:160,
      width: 270
    },
    emailInput: {
      width: 270
    }
  }

  return (
    <form
      style={styles.form}
      onSubmit={() => {
        setModalOpen(false)
        submitForm()
      }}
      action='https://formspree.io/f/mjvpaqzn'
      method='POST'
    >
      <label style={styles.text}>Your Email</label>
      <input style={styles.emailInput} type='email' name='email' />
      <label style={styles.text}>Message to Me</label>
      <textarea style={styles.messageInput} type='text' name='message' />
      <div style={styles.buttonRow}>
      {status === 'SUCCESS' ? <p>Thanks!</p> : <button style={{width:60}}><span style={styles.text}>Send</span></button>}
      {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </div>
    </form>
  );
}

export default ContactForm;