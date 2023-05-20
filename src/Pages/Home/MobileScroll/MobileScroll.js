import { Box, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './MobileScroll.css'
import ScreenTxt from './ScreenTxt'

const scrollData = [
    {
    heading : "we’ve gotyour back.",
    description : "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    mobileImg : "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
    },
    {
    heading : "begin your winning streak.",
    description : "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    mobileImg : "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png",
    },
    {
    heading : "for your eclectic taste.",
    description : "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    mobileImg : "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png",
    },{
    heading : "more cashin your pockets.",
    description : "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.    ",
    mobileImg : "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png",
    },
]
const MobileScroll = () => {

    const [currentImg,setCurrentImg] = useState(0)
  return (
    <>
        <Box className='max-width flex mobile-scroll'>
            
            <Grid item sx={{width:{xs:1,md:1/2}}}> 
               {scrollData.map((screen,i)=>(
                <div className='scroll-full-screen'>
                    <ScreenTxt screen={screen} i={i} setCurrentImg={setCurrentImg}/>
                </div>
               ))} 
            </Grid>

            <Grid item sx={{width:1/2}} className='non-mobile for-alignment'>
                <Box className='mobile-mockup'>
                 <div className='mobile-mockup-screen flex absolute-center'>
                    <img 
                    src={scrollData[currentImg].mobileImg} 
                    alt={scrollData[currentImg].mobileImg} 
                    className='mobile-screen-img slide-in-right'
                    key={scrollData[currentImg].mobileImg}
                    />
                </div>
                </Box>
            </Grid>
        </Box>
    </>
  )
}

export default MobileScroll