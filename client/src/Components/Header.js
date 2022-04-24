import react from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(){
    return(
    <>
   <nav>
       <h3>Dreambe</h3>
       <ul>
           <li>Inspiration</li>
           <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    <FontAwesomeIcon icon="coffee" listItem />
           <li>Find Offline Community</li>
           <li>Find Partner</li>
           <li>Find Mentor</li>
           <li>Find Club Friends</li>
           {/* <li>Write your dreams</li> */}
       </ul>
       <h4>About</h4>
   </nav>
    </>
    )
}

function Footer(){
    return(
        <>
        <footer>
            &copy; 2022 Yatinah dream be
        </footer>
        </>
    )
}
export default Header
