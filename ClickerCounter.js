import React, { useRef } from 'react';

const ClickerCounter = () => {
    const counter = useRef(0); // useRef to store the counter value
    const displayRef = useRef(null); // useRef to target the display element

    const increment = () => {
        counter.current += 1; // Increment the counter
        displayRef.current.innerText = counter.current; // Update the display
    };

    const decrement = () => {
        counter.current -= 1; // Decrement the counter
        displayRef.current.innerText = counter.current; // Update the display
    };

    return (
        <div style={styles.container}>
            <h1 ref={displayRef} style={styles.counter}>0</h1>
            <button 
                onClick={increment} 
                style={{ ...styles.button, ...styles.incrementButton }}
            >
                Increment
            </button>
            <button 
                onClick={decrement} 
                style={{ ...styles.button, ...styles.decrementButton }}
            >
                Decrement
            </button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '40px',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#f5f5f5', // Light background color for the page
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        fontSize: '60px',
        color: '#37474f', // Darker shade for counter text
        fontWeight: 'bold',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    button: {
        padding: '15px 25px',
        fontSize: '18px',
        margin: '10px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        color: '#fff',
    },
    incrementButton: {
        backgroundColor: '#00796b', // Teal color for increment button
    },
    decrementButton: {
        backgroundColor: '#d32f2f', // Dark red color for decrement button
    },
};

export default ClickerCounter;
