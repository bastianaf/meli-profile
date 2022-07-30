import { Image } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImageSlider = ({ slides }: { slides: Array<string> }) => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      emulateTouch={true}
      infiniteLoop
    >
      {slides.map((slide, index) => {
        return <Image src={slide} key={index} />
      })}
    </Carousel>
  )
}

export default ImageSlider
