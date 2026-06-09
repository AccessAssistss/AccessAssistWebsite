import React from "react";
import footer from './2.jpg';
import logo from '../assets/Assist Final Logo White.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className="mt-10">
      <footer
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          color: 'white', 
          height: '100%',
          width: '100%',
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '50px',
        
        }}
      >
        
        <div className="container mx-auto px-4  pt-28 mt-10  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
            {/* <div className="mt-5">
            <img width={180} src={logo} alt=""/>
            </div> */}
            <div className=" ml-3 space-x-4 mt-5 ">
            
                <a
                  href="#"
                  className="text-white"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="text-white"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                   className="text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="#"
                   className="text-white"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
          
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li className="cursor-pointer" onClick={() => navigate('/ourwork')} >Our work</li>
                <li className="cursor-pointer" onClick={() => navigate('/ourprojects')}>Our projects</li>
                <li className="cursor-pointer" onClick={() => navigate('/about')}>About us</li>
                <li className="cursor-pointer" onClick={() => navigate('/careers')}>Careers</li>
                <li className="cursor-pointer" onClick={() => navigate('/contact')}>Contact us</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="mb-20 space-y-3">
              <h3 className="text-lg font-semibold mb-4">Address</h3>

              <p>
                <strong>Registered Office:</strong> 1E/2, Desh Bandhu Gupta Road, Jhandewalan Extension, New Delhi 110055
              </p>

              <div className="mt-4">
                <p>
                  <strong>Corporate Office:</strong> Unitech Cyber Park
                </p>
                <p> Tower D , 9th Floor, Sector 39, Gurugram 122003</p>
              </div>

              <p>Email: communications@accessassist.in</p>
              <p>Phone: +91-8595022032</p>
            </div>
          </div>
          <Divider className="bg-white"/>          
            <div className="text-sm mt-10 justify-center flex   ">
              <a href="#" className="hover:underline mr-2 text-base">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline ml-2 text-base">
                Terms & Conditions
              </a>
            </div>
       </div>
      </footer>
    </div>
  );
};

export default Footer;
