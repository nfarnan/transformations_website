 
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6'
 export default function Footer(){
    return(
        <footer className="footer">
        <div className="contacts">
          <h3>Contact Us</h3>
          <p>
            <strong>
              Center for Ethnic<br></br>
              Studies Research<br></br>
            </strong>
            4212 Posvar Hall<br></br>
            University of Pittsburgh<br></br>
            Pittsburgh, PA 15260
          </p>
          <p>
            <strong>General Inquiries: </strong> 
            <a className="email-link" href="mailto:cesr@pitt.edu">cesr@pitt.edu</a>
          </p>
        </div>
        <div className="follows">
          <h3>Follow Us</h3>
          <a className="social-media" href="https://www.facebook.com/cesrpitt">
            <FaSquareFacebook></FaSquareFacebook>
          </a>
          <a className="social-media" href="https://www.instagram.com/cesr_pitt/">
            <FaSquareInstagram></FaSquareInstagram>
          </a>
          <a className="social-media" href="https://twitter.com/cesr_pitt">
            <FaSquareXTwitter></FaSquareXTwitter>
          </a>
        </div>
      </footer>
    )
 }