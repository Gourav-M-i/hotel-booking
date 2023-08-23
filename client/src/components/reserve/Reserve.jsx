import React, { useContext, useState } from 'react'
import "./Reserve.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'
const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRooms, setSelectedRooms] = useState([])
    const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`)
    const { dates } = useContext(SearchContext)

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())
        let list = []
        while (date <= end) {
            list.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }
        return list
    }

    const allDates= getDatesInRange(dates[0].startDate, dates[0].endDate)

    const isAvailable=(roomNumber)=>{
        
    }

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value))
    }

    const handleClick = () => [

    ]

    return (
        <div className='reserve'>
            <div className='rContainer'>
                <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={() => setOpen(false)} />
                <span>Select your rooms:</span>
                {data.map(item => (
                    <div className="rItem">
                        <div className='rItemInfo'>
                            <div className='rTitle'>{item.title}</div>
                            <div className='rDesc'>{item.desc}</div>
                            <div className='rMax'>Max people:<b>{item.maxPeople}</b></div>
                            <div className='rPrice'>{item.price}</div>
                        </div>
                        <div className='room'>
                            {item.roomNumbers.map(roomNumber => (
                                <div>
                                    <label>{roomNumber.number}</label>
                                    <input type='checkbox' value={roomNumber._id} onChange={handleSelect} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className='rButton'>Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve
