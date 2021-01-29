
import Link from 'next/link';

export default function Footer(props) {
    var numbers = [];
    for (var i = 2403; i <= 2413; i++) {
        numbers.push(i);
        

    }
    return (
        <footer>
            <h2>Previous 10 Jokes</h2>
            <ul>
            </ul>
            {numbers.map((num) =>
             <>
                <Link key={num} href="jokes/[joke].js" as={`jokes/${num}`} >
                    <a>{num}</a>
                    
                </Link>
                <br></br> 
                </>
            )}

        </footer>
    )
}