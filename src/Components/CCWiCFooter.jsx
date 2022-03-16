import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark' style={{backgroundImage: "linear-gradient(to right, #9D50BB 0%, #6E48AA  51%, #9D50BB  100%)"}}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
            <MDBBtn outline rounded color='light' href='https://www.facebook.com/CCWiC' className='m-1'>
                <FaFacebookF />
            </MDBBtn>

            <MDBBtn outline rounded color='light' href='https://twitter.com/CCWiCPR' className='m-1'>
                <FaTwitter />
            </MDBBtn>
        </section>

        <section className='mb-4'>
          <p>
          Caribbean Celebration of Women in Computing 2022
          </p>
        </section>
      </MDBContainer>

    </MDBFooter>
  );
}