import { Heading } from './Heading'
import { Presentation } from './Presentation'

import './Card.css'

import userIco from '../public/assets/userIco.png'
import devIco from '../public/assets/devIco.png'
import locIco from '../public/assets/locIco.png'
import numIco from '../public/assets/numIco.png'
import mailIco from '../public/assets/mailIco.png'
import dioIco from '../public/assets/dioIco.png'

export function Portfolio () {
  return (
    <div id='Card'>
      <div id='photoInfo'>
        <div id="photo">
          <img src={userIco} alt="Profile" width={128} height={128}/>
        </div>
        <div id='info'>
          <ul role='presentation'>
            <Heading img={devIco} alt='devIco' title='Frontend Developer'/>
            <Heading img={locIco} alt='locIco' title='Bombinhas - SC'/>
            <Heading img={numIco} alt='numIco' title='47 - 99786-XXXX' isClickable/>
            <Heading img={mailIco} alt='mailIco' title='ex@mail.com' isClickable/>
          </ul>
        </div>
      </div>
      <div id='sectionList'>
        <Presentation
          id='skills'
          title='Skills'
        />
        <Presentation
          id='languages'
          title='Languages' />
        <Presentation
          id='education'
          title='Education' />
        <Presentation
          id='portfolio'
          title='Portfolio' />
      </div>
      <div id='footer'>
        <img src={dioIco} alt="dioIco" width={30}/>
      </div>
    </div>
  )
}
