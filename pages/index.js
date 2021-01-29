import styles from '../styles.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import About from './about'

export default function Home(props) {
  return (
    <div className={styles.hello}>
      <Header />
      <h1>{props.joke.safe_title}</h1>
   
      <img src ={props.joke.img}></img>
      <Footer />
      <About />
      
    </div>
  )
}


export async function getServerSideProps(){
  const response  = await fetch ('https://xkcd.com/info.0.json');
  const jsonData = await response.json();
  
  return {props: {joke: jsonData}}
}
