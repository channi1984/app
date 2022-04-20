import React, { useState } from 'react';
import styles from './PersonAdd.module.css';

const PersonAdd = ({ addPerson }) => {
    const [newItem, setNewItem] = useState({
        name: '',
    });

    //인풋에 변경값이 있을경우
    const handleChange = (e) => {
        setNewItem({
            name: {
                first: e.target.value //newItem 스테이트를 변경한다.
            }
        });
    }

    //서밋 버튼을 눌렀을경우
    const handleSubmit = () => {
        addPerson(newItem); //스테이트로 받아온 함수를 이용해 부모에게 스테이트 값을 넘긴다.
    }

    return (
        <>
            <div className={styles.personAdd}>
                <input type="text" onChange={handleChange} />
                <button type="button" onClick={handleSubmit}>멤버 추가</button>
            </div>
        </>
    );
};

export default PersonAdd;