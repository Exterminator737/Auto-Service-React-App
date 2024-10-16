import car1 from "./carousel-1.png";
import car2 from "./carousel-2.png";
import bg1 from "./carousel-bg-1.jpg";
import bg2 from "./carousel-bg-2.jpg";
import service1 from './service-1.jpg'
import service2 from './service-2.jpg'
import service3 from './service-3.jpg'
import service4 from './service-4.jpg'
import team1 from './team-1.jpg'
import team2 from './team-2.jpg'
import team3 from './team-3.jpg'
import team4 from './team-4.jpg'
import test1 from './testimonial-1.jpg'
import test2 from './testimonial-2.jpg'
import test3 from './testimonial-3.jpg'
import test4 from './testimonial-4.jpg'


export const carousel = [
    {
        id: 1,
        car_img: car1,
        bg_img: bg1,
        p:  'Qualified Car Repair'
    },
    {
        id: 2,
        car_img: car2,
        bg_img: bg2,
        p: 'Qualified Car Wash' 
    }
]

export const images = [service1, service2, service3, service4]

export const team = [
    {
        img: team1,
        name: 'John Doe',
        occupation: 'Mechanical Engineer'
    },
    {
        img: team2,
        name: 'Petrus Mqhele',
        occupation: 'Floor Supervisor'
    },
    {
        img: team3,
        name: 'Tshepo Tlou',
        occupation: 'Diesel Mechanic'
    },
    {
        img: team4,
        name: 'Godfrey Thompson',
        occupation: ' Auto Mechanic'
    }
]

export const testimonials = [
    {
        img: test1,
        name: 'Diane Forbes',
        review: 'I am so glad i went to Michanic. After numerous times of receiving horrible service at Electro diesel, I finally found a company that meets all my needs in a friendly and professional manner!'

    },
    {
        img: test2,
        name: 'Fabriccio Lampert',
        review: 'Great service. Very affordable and I love the friendly staff. Thank you, my car is in immaculate condition'
    },
    {
        img: test3,
        name: 'Daquan Howard',
        review: 'Excellent service'
    },
    {
        img: test4,
        name: 'Katie Thompson',
        review: 'Professional service. Workmanship of high quality. Happy with the work they did on my vehicle. And they did not finish my budget.'
    }
]