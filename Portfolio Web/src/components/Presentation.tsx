import arrowIco from '../public/assets/arrowIco.png'
import { SubPresentationDesc, SubPresentationImg } from './SubPresentation'
import { useState, useRef } from 'react'

import reactIco from '../public/assets/reactIco.png'
import typeIco from '../public/assets/typeIco.png'
import viteIco from '../public/assets/viteIco.png'

interface PresentationProps {
  id:string
  title:string
  ref:string
}

export function Presentation ({ id, title, ref }: PresentationProps) {
  const skillsRef = useRef<HTMLDivElement>(null)
  const languagesRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div id={id} className={isExpanded ? 'expanded' : ''}>
      <button type='button' onClick={toggleExpansion}>
        <h2>{title}</h2>
        <img className='arrow_bottom' src={arrowIco} alt='arrowIco'/>
      </button>

      {skillsRef?.classList.contains('expanded') && (
        <div>
          <SubPresentationImg
            images={[
              { id: 1, src: reactIco, alt: 'reactIco', size: 10 },
              { id: 2, src: typeIco, alt: 'typeIco', size: 10 },
              { id: 3, src: viteIco, alt: 'viteIco', size: 10 }
            ]}
            />
          <SubPresentationDesc
            descriptions={[
              { id: 1, desc: '', subDesc: '' },
              { id: 2, desc: '', subDesc: '' }
            ]}
          />
        </div>
      )}
      {languagesRef?.classList.contains('expanded') && (
        <div>
          <SubPresentationDesc
          descriptions={[
            { id: 1, desc: 'Português - BR', subDesc: 'Nativo/Fluente' },
            { id: 2, desc: 'Inglês', subDesc: 'Intermediário' }
          ]}
          />
        </div>
      )}
      {educationRef?.classList.contains('expanded') && (
        <div>
          <SubPresentationDesc
            descriptions={[
              { id: 1, desc: 'Ciência da Computação', subDesc: '5/10' }
            ]}
          />
        </div>
      )}
      {portfolioRef?.classList.contains('expanded') && (
        <div>
          <SubPresentationImg
            images={[
              { id: 1, src: '', alt: 'githubIco', size: 10 },
              { id: 2, src: '', alt: 'linkedinIco', size: 10 }
            ]}
          />
          <SubPresentationDesc
            descriptions={[
              { id: 1, desc: 'Github', subDesc: 'link' },
              { id: 2, desc: 'Linkedin', subDesc: 'link' }
            ]}
          />
        </div>
      )}
    </div>
  )
}
