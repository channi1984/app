import React, { useState, useEffect } from 'react';
import PersonAdd from './components/PersonAdd';
import PersonList from './components/PersonList';

const App = () => {

  //유즈 스테이스를 사용해서 스테이트 관리
  const [user, setUser] = useState([]);

  //Fetch Api를 이용해 데이터를 가져온다
  const fetchApi = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then(data => data.json())
      .then(data => setUser(data.results));
  }

  //유즈 이펙트로 한번만 실행할수 있도록
  useEffect(() => {
    fetchApi();
  }, []);


  //Person Add에서 새로 추가된 스테이트를 넘겨받자
  const addPerson = (newItem) => {
    setUser([newItem, ...user])
    console.log([newItem, ...user])
  }

  return (
    <>
      <PersonAdd addPerson={addPerson} />
      <PersonList user={user} />
    </>
  );
};

export default App;