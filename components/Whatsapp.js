 import styled from 'styled-components'
 import Image from 'next/image'
 import Link from "next/link";

  

const Whatsicon = styled.div `
position: fixed;
bottom: 20px;
right: 20px;
width: 39px;
height: 39px;
 overflow: hidden;
 z-index: 1000
 ` 


 export function Whatsapp() {
 
        return(
            <Whatsicon className='fixed bottom-4 right-4'>
                <a 
                aria-label="Abre whatsapp, link do meu whatsapp (48) 99911-3048, me mande um oi"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://api.whatsapp.com/send?phone=5548999113048" 
                className="whatsapp"> 
                    <Image src="../whatsapp.svg" width="39" height="39" aria-hidden="true" alt="Whatsapp" />
                </a>
            </Whatsicon>
        )
        }