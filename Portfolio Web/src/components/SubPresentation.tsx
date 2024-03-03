interface Image {
  src:string
  alt:string
  size:number
  href?:string
  title?:string
}

interface Description {
  desc?:string
  subDesc?:string
}

interface SubPresentationProps {
  images?:Image[]
  descriptions?:Description[]
  className:string
}

export function SubPresentationImg ({ images, className }: SubPresentationProps) {
  return (
    <>
      {images && images.map((images, index) =>
        <div key={index}>
          <img className={className} src={images.src} alt={images.alt} width={images.size} height={images.size}/>
          <a href={images.href} target="_blank">{images.title}</a>
        </div>
      )}
    </>
  )
}

export function SubPresentationDesc ({ descriptions, className }: SubPresentationProps) {
  return (
    <>
      {descriptions && descriptions.map((descriptions, index) =>
        <div key={index} className={className}>
          <h4>
            {descriptions.desc}
          </h4>
          <p>
            {descriptions.subDesc}
          </p>
        </div>
      )}
    </>
  )
}
