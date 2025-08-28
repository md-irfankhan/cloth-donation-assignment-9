import React from 'react';
import CampaignCard from './CampaignCard/CampaignCard';

const Campaign = ({data}) => {
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl font-bold my-5'>Our Campaigns</h1>
            </div>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    data.map(camp=><CampaignCard camp={camp}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default Campaign;