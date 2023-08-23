import React from 'react'
import './Featured.css'
import useFetch from '../../hooks/useFetch'
const Featured = () => {
    const { data, loading, error, reFetch } = useFetch("/api/hotels/countByCity?cities=India,England")
    return (
        <div className='featured'>
            {loading ? "loading please wait" : <>
                <div className='featuredItem'>
                    <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" />
                    <div className='featuredTitles'>
                        <h1>India</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className='featuredItem'>
                    <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/region/square250/68522.webp?k=a53c0fffc2f8d8c1ec72144fdb934d5e2bc5cf8c324467bce89c4f3bae22c181&o=" />
                    <div className='featuredTitles'>
                        <h1>Berlin</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className='featuredItem'>
                    <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/landmark/square250/207433.webp?k=46774718d685dde38a80e1889c30df88c37e4c480728f0530993ac9ef667e881&o=" />
                    <div className='featuredTitles'>
                        <h1>England</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Featured
