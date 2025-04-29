'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function DemoPage() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRefs = useRef([])

  const videos = [
    { src: '/videos/Intro.mp4', title: 'SmartFin AI' },
    { src: '/videos/login.mp4', title: 'Login / Signup' },
    { src: '/videos/createaccount.mp4', title: 'Create an Account' },
    { src: '/videos/Dashboard.mp4', title: 'Our Dashboard' },
    { src: '/videos/addTransaction.mp4', title: 'Add a Transaction' },
    { src: '/videos/receiptscanning.mp4', title: 'Smart Receipt Scanning' },
    { src: '/videos/wallet.mp4', title: 'Savings or Wallet Facility' },
    { src: '/videos/budgetalert.mp4', title: 'Budget Alerts' },
    { src: '/videos/insights.mp4', title: 'Monthly Reports and Insights' },
  ]

  const [showHeading, setShowHeading] = useState(true)

  useEffect(() => {
    setShowHeading(true)
    const timeout = setTimeout(() => setShowHeading(false), 2000)

    const playCurrentVideo = async () => {
      // Pause all other videos
      videoRefs.current.forEach((video, index) => {
        if (video && index !== activeIndex) {
          video.pause()
        }
      })

      const currentVideo = videoRefs.current[activeIndex]
      if (currentVideo) {
        currentVideo.currentTime = 0
        currentVideo.playbackRate = 1.5
        try {
          await currentVideo.play()
        } catch (err) {
          console.warn('Video play interrupted:', err)
        }
      }
    }

    playCurrentVideo()

    return () => clearTimeout(timeout)
  }, [activeIndex])

  return (
    <div className="overflow-x-hidden overflow-y-hidden dark:bg-[#0c0c0c] bg-white flex items-center justify-center h-screen w-screen">
      <div className="relative w-[80vw] h-[75vh] bg-white border-4 border-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">

        {/* Heading overlay */}
        {showHeading && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 transition-opacity duration-700 ease-in-out">
            <h2 className="text-6xl font-extrabold text-white bg-black bg-opacity-70 px-10 py-6 rounded-2xl shadow-xl animate-fadein">
              {videos[activeIndex].title}
            </h2>
          </div>
        )}

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full h-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  className="w-full h-full object-contain rounded-xl"
                  muted
                  playsInline
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
          <button
            className="prev-button text-5xl text-gray-600 hover:text-gray-800"
            onClick={() => swiperRef.current.slidePrev()}
          >
            &#171;
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
          <button
            className="next-button text-5xl text-gray-600 hover:text-gray-800"
            onClick={() => swiperRef.current.slideNext()}
          >
            &#187;
          </button>
        </div>

      </div>

      {/* Animate fade-in custom keyframes */}
      <style jsx>{`
        @keyframes fadein {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadein {
          animation: fadein 0.7s ease-out;
        }
      `}</style>
    </div>
  )
}
