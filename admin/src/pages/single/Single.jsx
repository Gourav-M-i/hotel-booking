import React from 'react'
import "./Single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className='singleContainer'>
                <Navbar />
                <div className='top'>
                    <div className='left'>
                        <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className='item'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzA7N3crY59oioOtJ0za-USgAnOhzpg5toRQ&usqp=CAU' alt='' className='itemImg' />
                            <div className='details'>
                                <h1 className='itemTitle'>Gourav Mishra</h1>
                                <div className='detailItme'>
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>gm@gmail.com</span>
                                </div>
                                <div className='detailItme'>
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>6000760966</span>
                                </div>
                                <div className='detailItme'>
                                    <span className='itemKey'>Address:</span>
                                    <span className='itemValue'>BTM Layout</span>
                                </div>
                                <div className='detailItme'>
                                    <span className='itemKey'>Country:</span>
                                    <span className='itemValue'>India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
                    </div>
                </div>
                <div className='bottom'>
                    <h1 className='title'>Last Transactions</h1>
                    <List />
                </div>
            </div>

        </div>
    )
}
export default Single
