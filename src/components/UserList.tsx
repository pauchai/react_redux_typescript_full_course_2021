import React from 'react';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';


const UserList: React.FC = () => {
    const state = useTypedSelector(state => state.user)
    
  return <div>user list</div>;
};

export default UserList;
