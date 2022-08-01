import React from 'react';
import styles from './styles.module.css';

type Props={
className?:string;
}

const User:React.FC<Props>=({className})=>{
return (<div className={className}></div>);
}

export default User;