import React, { useContext, useEffect, useState } from 'react';
import ChefData from './ChefData';
import { AuthContext } from '../../providers/AuthProviders';

const ChefSection = () => {
    const { setLoading, loading } = useContext(AuthContext)

    const [chefData, setChefData] = useState([]);
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        fetch("https://assignment-10-client-oliullah05.vercel.app/allchefdata")
            .then(res => res.json())
            .then(data => {
                setChefData(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className='my-container flex justify-center'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    return (
        <div className='my-container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    chefData.map(chefData => <ChefData key={chefData.id} chefData={chefData} />)
                }
            </div>
            {/* <div className='flex justify-center'>
                <button onClick={() => setShowMore(!showMore)} type='button' className={`btn-primary mt-10 ${showMore ? 'hidden' : ''}`}>
                    Show more
                </button>
            </div> */}
        </div>
    );
};

export default ChefSection;