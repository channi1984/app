import React, { useState, useEffect } from 'react';
import PersonAdd from './components/PersonAdd';
import PersonList from './components/PersonList';

const App = () => {

  //유즈 스테이스를 사용해서 스테이트 관리
  const [user, setUser] = useState([]);

  //Fetch Api를 이용해 데이터를 가져온다
  const fetchApi = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(data => data.json())
      .then(data => setUser(data.results));
  }

  //유즈 이펙트로 한번만 실행할수 있도록
  useEffect(() => {
    fetchApi();
  }, []);

  //배열 데이터를 맵으로 돌려서 JSX로 반환
  const list = user.map((data) => (
    <h3 key={data.email}>{data.name.first}</h3>
  ))

  return (
    <>
      <PersonAdd />
      <div className="person-list">
        <PersonList list={list} />
      </div>
    </>
  );
};

export default App;