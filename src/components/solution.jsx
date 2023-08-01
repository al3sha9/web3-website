
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import { EffectFade } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/pagination';

// import './App.css'

// import required modules
// import { Pagination } from 'swiper/modules';
export default function Solution() {
    return (
        <section className="solution pt-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-center py-5'>OUR SOLUTION</h2>
                        <Swiper
                            // effect="fade"
                            
                            slidesPerView={3}
                            spaceBetween={10}
                            centeredSlides={true}
                            pagination={{
                                clickable: false,
                            }}
                            
                            
                            // modules={[EffectFade]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <span className='fa-solid fafa fa-film'></span>
                                <h3 className='pt-3 pb-3'>Red Rose</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium consequatur nemo saepe, voluptatum modi explicabo.</p>
                            <a href="#">Learn More <i className="fa-solid fa-chevron-right"></i></a>    
                            </SwiperSlide>
                            <SwiperSlide>
                                <span className='fa-solid fafa fa-gift'></span>
                                <h3 className='pt-3 pb-3'>Red Rose</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium consequatur nemo saepe, voluptatum modi explicabo.</p>
                            <a href="#">Learn More <i className="fa-solid fa-chevron-right"></i></a>    
                            </SwiperSlide>
                            <SwiperSlide>
                                <span className='fa-solid fafa fa-eye'></span>
                                <h3 className='pt-3 pb-3'>Red Rose</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium consequatur nemo saepe, voluptatum modi explicabo.</p>
                            <a href="#">Learn More <i className="fa-solid fa-chevron-right"></i></a>    
                            </SwiperSlide>
                            <SwiperSlide>
                                <span className='fa-solid fafa fa-poo'></span>
                                <h3 className='pt-3 pb-3'>Red Rose</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium consequatur nemo saepe, voluptatum modi explicabo.</p>
                            <a href="#">Learn More <i className="fa-solid fa-chevron-right"></i></a>    

                            </SwiperSlide>
                            <SwiperSlide>
                                <span className='fa-solid fafa fa-poo'></span>
                                <h3 className='pt-3 pb-3'>Red Rose</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium consequatur nemo saepe, voluptatum modi explicabo.</p>
                            <a href="#">Learn More <i className="fa-solid fa-chevron-right"></i></a>    

                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}