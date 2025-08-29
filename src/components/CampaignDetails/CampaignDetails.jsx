
import { useLoaderData, useParams } from 'react-router';
import CampaignForm from './CampaignForm/CampaignForm';

const CampaignDetails = () => {
  
    const {id}=useParams()
    const data=useLoaderData() 
    console.log(data.campaigns);
    const campData=data.campaigns.find(camp=>camp.id==id)
    console.log(campData);
    
    
    return (
        <div className='max-w-[1250px] mx-auto'>
            <h1 className='text-[25px] font-bold'>{campData.title}</h1>

            <p>
                {campData.description}
            </p>
            <CampaignForm></CampaignForm>
        </div>
    );
};

export default CampaignDetails;