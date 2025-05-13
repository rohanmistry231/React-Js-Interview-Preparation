import React from 'react';
import styles from './CSSModulesDemo.css';

// Main Learning Points: CSS Modules
// CSS Modules provide local scope for styles, preventing global CSS conflicts.
const CSSModulesDemo = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>CSS Modules Demo</h2>
            <p className={styles.text}>This component uses CSS Modules for scoped styling.</p>
        </div>
    );
};

export default CSSModulesDemo;