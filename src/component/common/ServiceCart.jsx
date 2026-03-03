import React from 'react'
import allIcon from '../../helper/IconProvider'

const ServiceCart = () => {
    const {serviceFeatures} = allIcon
  return (
    <div className='flex flex-col items-center gap-y-6'>
        <div className='p-2 flex items-center justify-center  bg-[#2f2e3038] rounded-full'> 
            <span className='text-[30px] p-2 inline-block bg-text2 rounded-full text-primary'>{serviceFeatures[0].icon}</span>
        </div>
       <div>
        <p className='text-text2 title20PXSemiBold'>{serviceFeatures[0].title}</p>
        <p className='pt-2 title14PXRegular text-text2' >{serviceFeatures[0].description}</p>
       </div>
    </div>
  )
}

export default ServiceCart