import React, { useState } from 'react'
import "./NewHotel.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { hotelInputs } from '../../formsource';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const NewHotel = () => {
    const [files, setFiles] = useState("")
    const [info, setInfo] = useState({})
    const [rooms, setRooms] = useState([])
    const { data, error, loading } = useFetch('http://localhost:8800/api/rooms')

    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value)
        setRooms(value)
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const list = await Promise.all(Object.values(files).map(async (file) => {
                const data = new FormData()
                data.append("file", file)
                data.append("upload_preset", "upload")
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/daxzvz9st/image/upload", data)
                const { url } = uploadRes.data
                return url
            }))
            const newHotel = {
                ...info,
                rooms,
                photos: list
            }
            const res = await axios.post("http://localhost:8800/api/hotels", newHotel, { withCredentials: true })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='top'>
                    <h1>Add New Hotel</h1>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <img
                            src={files ? URL.createObjectURL(files[0]) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCf2rYyyyBYanJaQ_bsdF0sX7cHvRB-Pk_hg&usqp=CAU"} alt='' />
                    </div>
                    <div className='right'>
                        <form >
                            <div className='formInput'>
                                <label htmlFor='file'>
                                    Image:
                                    <DriveFolderUploadOutlinedIcon className='icon' />
                                </label>
                                <input type='file' id='file' style={{ display: 'none' }} multiple onChange={e => setFiles(e.target.files)} />
                            </div>
                            {hotelInputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} id={input.id} onChange={handleChange} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <div className='formInput'>
                                <label>Featured</label>
                                <select id="featured" onChange={handleChange}>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                            <div className='selectRooms'>
                                <label>Rooms</label>
                                <select id="rooms" multiple="multiple" onChange={handleSelect}>
                                    {loading ? "loading" : data && data.map(room => (
                                        <option value={room._id} key={room._id}>{room.title}</option>
                                    ))}
                                </select>
                            </div>
                            <button onClick={handleClick}>Send</button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default NewHotel
