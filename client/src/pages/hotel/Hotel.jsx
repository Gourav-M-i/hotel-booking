import React, { useContext, useState } from 'react'
import './Hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch.js'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AythContext'
import Reserve from '../../components/reserve/Reserve'
const Hotel = () => {
    const loaction = useLocation()
    const id = loaction.pathname.split("/")[2]
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const { data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/hotels/find/${id}`)

    const { dates, options } = useContext(SearchContext)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime())
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
        return diffDays
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate)

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/216827421.jpg?k=9cb8e647ae697eb4399a568f685252931f69fbcc67a37b8b41aa44b269afea60&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223494915.jpg?k=b1c09ff0ff09bd86d06861cfebb76a937090f7339a09ca5d53662db340d90cba&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254814935.jpg?k=b5b3be13039f9bebfc613a56b3860d7c4d1d4208d25da44587e3625f1ce5410c&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254836733.jpg?k=c1747f5490810545a1c97aeb04f34c339ae93ea93d264296b01122260b71eef5&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223497697.jpg?k=91165e411cd4dfc5b3f2bc6c7b8301ed3c0223158576d905c5dce21fa3ec86f3&o=&hp=1"
        }
    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true)
    }
    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
    const handleClick = () => {
        if (user) {
            setOpenModal(true)
        } else {
            navigate("/login")
        }
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? "loading" :
                <div className='hotelContainer'>
                    {open && <div className='slider'>
                        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")} />
                        <div className='sliderWrapper'>
                            <img src={data.photos[slideNumber]} alt='' className='sliderImg' />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")} />
                    </div>}
                    <div className='hotelWrapper'>
                        <button className='bookNow'>Reserve or Book Now!</button>
                        <h1 className='hotelTitle'>{data.name}</h1>
                        <div className='hotelAddress'>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                        </div>
                        <span className='hotelDistance'>
                            Excellent location - {data.distance}m from center
                        </span>
                        <span className='hotelPriceHighlight'>
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </span>
                        <div className='hotelImages'>
                            {data.photos?.map((photo, i) => (
                                <div className='hotelImgWrapper' key={i}>
                                    <img onClick={() => handleOpen(i)} src={photo} alt='' className='hotelImg' />
                                </div>
                            ))}
                        </div>
                        <div className='hotelDetails'>
                            <div className='hotelDetailsTexts'>
                                <h1 className='hotelTitle'>{data.title}</h1>
                                <p className='hotelDesc'>{data.desc}</p>
                            </div>
                            <div className='hotelDetailsPrice'>
                                <h1>perfect for a {days}-night stay</h1>
                                <span>Located in the rel heart of Krakow, this property has an excellent loaction scoreof 9.8!</span>
                                <h2>
                                    <b>${days * data.cheapestPrice * options.room}</b>({days} nights)
                                </h2>
                                <button onClick={handleClick}>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
        </div>
    )
}

export default Hotel
