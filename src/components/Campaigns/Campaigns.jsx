import { useLoaderData } from "react-router";
import CampaignCard from "../Home/Campaign/CampaignCard/CampaignCard";

const Campaigns = () => {
    const data=useLoaderData()
    console.log(data);
    
    return (
        <div className="max-w-[1250px] mx-auto">
            <h1 className="text-2xl font-bold my-3.5">All Campaigns</h1>

            <div className="flex flex-wrap gap-5 justify-center">
                {
                    (data.campaigns).map(camp=><CampaignCard camp={camp}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default Campaigns;