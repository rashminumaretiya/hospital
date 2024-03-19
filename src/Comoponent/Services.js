import React from 'react'
import SingleService from '../Common/SingleService'
import CustomContainer from '../Common/CustomContainer'
import CustomBox from '../Common/CustomBox'
import ServiceBg from '../Assets/png/service-BG.png'
const Services = () => {
  return (
    <CustomBox component='section' id="services" className="section" sx={{
      padding:{md:'100px 0',sm:'60px 0',xs:'45px 0',mxs:'30px 0',lxs:'20px 0'},
      backgroundImage:`url(${ServiceBg})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundSize:'cover',
      backgroundColor:'rgba(51,104,198,0.1)'
      }} >
      <CustomContainer>
        <SingleService />
      </CustomContainer>
    </CustomBox>
  )
}

export default Services
