import React from 'react';
import styles from './styles.module.css';

type Props={
className?:string;
}

const Page:React.FC<Props>=({className})=>{
return (<div className={className}></div>);
}

export default Page;