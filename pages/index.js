import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dados from './dados.json';

export default function Home() {
  return (
    <div>
      <h1> Quadro de medalhas - Tóquio 2020 </h1>
      <div>
        {dados.map(item => {
          return <div>{item.Team}</div>;
        })}
      </div>
    </div>
  );
}
