import React from 'react';
import styles from './PersonAdd.module.css';

const PersonAdd = () => {
    return (
        <>
            <div className={styles.personAdd}>
                <input type="text" />
                <button type="button">멤버 추가</button>
            </div>
        </>
    );
};

export default PersonAdd;