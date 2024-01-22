import { SectionDataArray } from 'app/types/page'
import { SolitoImage } from 'solito/image'
import { Link } from 'solito/link'

export const GridImage = ({
  sectionData,
  deviceType,
  imageAspectRatio,
}: {
  sectionData: SectionDataArray
  deviceType: SupportedDeviceType
  imageAspectRatio: number
}) => {
  const { slug, type_key, type_value, title } = sectionData

  const generatePath = () => {
    switch (type_key) {
      case 'page':
        return `/${slug}`
      case 'category':
        return `/products?categories=${slug}`
      case 'collection':
        return `/products?collections=${slug}`
      case 'brand':
        return `/products?brands=${slug}`
      case 'link':
        return type_value ?? '#'
      case 'product':
        return `/product/${slug}`
      case 'clinic-appointment-screen':
        return '/medical-centre'
      default:
        return '#'
    }
  }

  return (
    <Link href={generatePath()} className="bg-white ">
      <SolitoImage
        src={
          sectionData[deviceType].image_url ??
          '/images/default-product-image.png'
        }
        height={sectionData[deviceType].height ?? 500}
        width={sectionData[deviceType].width ?? 1440}
        alt={title}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: imageAspectRatio,
        }}
      />
    </Link>
  )
}
