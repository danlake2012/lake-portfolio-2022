import '../components/WorkCardStyles.css';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

import React from 'react'




const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>
                <div className='project-container'>
                    {WorkCardData.map((val, ind) =>{
                        return (
                            <WorkCard 
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            description={val.description}
                            view={val.view}
                            />
                        );
                    })}

                </div>

            </h1>

        </div>
    )
}

export default Work