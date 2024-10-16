import Showcase from '../components/Showcase'
import Display from '../components/Display'
import TestimonialSlider from '../components/TestimonialSlider'
import Carousel from '../components/Carousel'
const Home = () => {
  return (
    <div className='w-full'>
        <Carousel />
        <Showcase />
        <Display />
        <div className='mt-10'><TestimonialSlider /></div>
    </div>
  )
}

export default Home