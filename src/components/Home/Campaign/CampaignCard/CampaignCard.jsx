
const CampaignCard = ({camp}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={camp.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {camp.title}
                    <div className="badge badge-secondary">{camp.status}</div>
                </h2>
                <p>{camp.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline hover:bg-sky-200">Donate</div>
                    
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;