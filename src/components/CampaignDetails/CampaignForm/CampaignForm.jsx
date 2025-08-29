import React from 'react';
import toast from 'react-hot-toast';

const CampaignForm = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        toast.success('Thank you ! We will reach your destination soon')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex justify-center flex-col'>
                <div className='flex gap-2 mb-2'>
                    <input type="number" placeholder="Quantity" className="input" />
                    <select defaultValue="Pick a color" className="select">
                        <option disabled={true}>Item Type</option>
                        <option>Jacket</option>
                        <option>Blanket</option>
                        <option>Sweter</option>
                    </select>
                </div>

                <div>
                    <input type="text" placeholder="Pickup Location" className="input" />
                </div>
                <div>
                    <input type="submit" className="btn btn-neutral mt-4" value="Donate" />
                </div>
            </form>
        </div>
    );
};

export default CampaignForm;