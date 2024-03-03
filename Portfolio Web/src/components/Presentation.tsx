import arrowIco from '../public/assets/arrowIco.png'
import { SubPresentationDesc, SubPresentationImg } from './SubPresentation'
import { useState } from 'react'

import reactIco from '../public/assets/reactIco.png'
import typeIco from '../public/assets/typeIco.png'
import viteIco from '../public/assets/viteIco.png'
import linkIco from '../public/assets/linkIco.png'
import gitIco from '../public/assets/gitIco.png'

interface PresentationProps {
  id:string
  title:string
}

export function Presentation ({ id, title }: PresentationProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div id={id} className={isExpanded ? 'expanded' : ''}>
      <button type='button' onClick={toggleExpansion}>
        <h2>{title}</h2>
        <img className='arrow' src={arrowIco} alt='arrowIco'/>
      </button>

      {isExpanded && id === 'skills' && (
        <div id='subSkills'>
          <SubPresentationImg
            className='icos'
            images={[
              { src: reactIco, alt: 'reactIco', size: 10 },
              { src: typeIco, alt: 'typeIco', size: 10 },
              { src: viteIco, alt: 'viteIco', size: 10 }
            ]}
          />
        </div>
      )}
      {isExpanded && id === 'languages' && (
        <div id='subLang'>
          <SubPresentationDesc
            className='desc'
            descriptions={[
              { desc: 'Portuguese:', subDesc: 'Native/Fluent' },
              { desc: 'English:', subDesc: 'Intermediary' }
            ]}
          />
        </div>
      )}
      {isExpanded && id === 'education' && (
        <div>
          <SubPresentationDesc
            className='desc'
            descriptions={[
              { desc: 'Computer Science:', subDesc: '5/10' }
            ]}
          />
        </div>
      )}
      {isExpanded && id === 'portfolio' && (
        <div id='subPort'>
          <SubPresentationImg
            className='icos'
            images={[
              { src: gitIco, alt: 'githubIco', size: 10, href: 'https://github.com/malockey', title: 'Github' },
              { src: linkIco, alt: 'linkedinIco', size: 10, href: 'https://linkedin.com/in/malockey', title: 'Linkedin' }
            ]}
          />
        </div>
      )}
    </div>
  )
}
