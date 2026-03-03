import React from 'react'
import allIcon from '../../helper/IconProvider'

const TeamCard = () => {
    //  for icons 
    const {teamSocialIcons} =  allIcon
  return (
    <div>
        <figure>
            <img src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_rp_progressive&w=740&q=80" alt="team-member-images" className='w-[370px] h-[430px] object-cover' />
        </figure>
        <div className='mt-8'>
            <h3 className='heading32PXMedium text-text2'>Tom Cruise</h3>
            <p className='pt-2 pb-4 text-text2 title16PXRegular'>Founder & Chairman</p>
            <ul className='flex gap-x-5'>

                {teamSocialIcons.map((items,index)=>{
                    return <li key={index}> <a href={items.href} className='text-lg text-button' target='_blank'>{items.icon}</a></li>
                })}
              
               
            </ul>
        </div>
    </div>
  )
}

export default TeamCard