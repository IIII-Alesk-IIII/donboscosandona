import { Container, Typography } from '@mui/material'
import { NewsCard } from '/components'

import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle'

export default function News({data, title, limit}) {
   if(!data) return <div>Caricamento in corso...</div>
   if(data && data.status == '404') return <div>Erroe: il canale specificato pr le news è inesistente.</div>
   
   data = data.filter((post) => !post.in_evidenza)//prendo solo quelli NON in evidenza
   data.splice(limit) //prendo solo i primi 2
   
   console.log(data)

   return (
       <Container maxWidth='lg' sx={{ marginTop: '5rem', marginBottom: '6rem' }}>
         <Typography
           style={{ textAlign: 'left', paddingBottom: '2rem' }}
           component='h2'
           variant='h4'
           color='inherit'
           gutterBottom
         >
           {title}
         </Typography>
         <Swiper
        modules={[Pagination, Autoplay]}
        autoplay
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {data.map((post) => (
          <SwiperSlide>
            <NewsCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}