interface Image {
  id:number
  src:string
  alt:string
  size:number
}

interface Description {
  id:number
  desc:string
  subDesc:string
}

interface SubPresentationProps {
  images?:Image[]
  descriptions?:Description[]
}

export function SubPresentationImg ({ images }: SubPresentationProps) {
  return (
    <>
      {images && images.map((images, id) =>
        <img key={id} src={images.src} alt={images.alt} width={images.size} height={images.size}/>
      )}
    </>
  )
}

export function SubPresentationDesc ({ descriptions }: SubPresentationProps) {
  return (
    <>
      {descriptions && descriptions.map((descriptions, id) =>
        <div key={id}>
          <h3>
            {descriptions.desc}
          </h3>
          <p>
            {descriptions.subDesc}
          </p>
        </div>
      )}
    </>
  )
}
