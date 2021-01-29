// import styles from '../styles.module.css';
import Header from '../../components/header'
// import Link from 'next/link';

export default function PrevJoke(props) {

    return (
        <>
            <Header />
            <h1>{props.joke.safe_title}</h1>
            <h2>hiii</h2>
            <img src={props.joke.img}></img>
        </>
    );

}

export async function getServerSideProps(context) {
    const num = context.query.joke;
    const response = await fetch(`https://xkcd.com/${num}/info.0.json`);
    console.log(num);
    const jsonData = await response.json();
    return { props: { joke: jsonData } };
}