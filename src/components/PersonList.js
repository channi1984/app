import React from 'react';
import styles from './PersonList.module.css';

const PersonList = (props) => {

    //배열 데이터를 맵으로 돌려서 JSX로 반환
    const list = props.user.map((data) => (
        <li key={data.email}>
            <div className={styles.name}>
                {data.name.first}
            </div>
        </li>
    ));

    return (
        <>
            <div className={styles.personList}>
                {list}
            </div>
        </>
    );
};

export default PersonList;