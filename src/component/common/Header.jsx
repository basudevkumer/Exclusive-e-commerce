import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <header className='py-3 bg-button'>
        <Container>
            <div className='flex items-center  justify-center gap-x-2'>
                <p className='text-text  title14PXRegular'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="#" className='text-text title14PXSemiBold underline '>ShopNow</a>
            </div>
        </Container>
    </header>
  )
}

export default Header