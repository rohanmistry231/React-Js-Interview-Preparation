import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Main Learning Points: Portals
// Portals allow rendering children into a different DOM node, useful for modals, tooltips, etc.
const PortalsDemo = () => {
    const [showModal, setShowModal] = useState(false);

    const Modal = ({ children }) => {
        return ReactDOM.createPortal(
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                }}>
                    {children}
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            </div>,
            document.body
        );
    };

    return (
        <div>
            <h2>Portals Demo</h2>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            {showModal && (
                <Modal>
                    <p>This modal is rendered using a Portal!</p>
                </Modal>
            )}
        </div>
    );
};

export default PortalsDemo;