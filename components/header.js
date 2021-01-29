
import Link from 'next/link';




export default function Header(props){
    return(
<header>
    <nav> 
        <Link href = '/'> 
        <a>HOME</a>
        </Link>
<br></br>
<br></br>
        <Link href = 'about'>
            <a>ABOUT</a>
        </Link>
    </nav>
</header>
    )
}

