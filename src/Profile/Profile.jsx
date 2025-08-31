import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Profile = () => {
    const {user,userProfileUpdate}=useContext(AuthContext)
    const handleUpdate=(e)=>{
        e.preventDefault()
        const form=new FormData(e.target)
        const name=form.get('name')
        const photo=form.get('photo')
        userProfileUpdate(name,photo)
        .then(res=>{
            toast.success("Profile Updated")
        })
        .catch(err=>{
            toast.error("Update Failed")
        })
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend class="fieldset-legend">Profile details</legend>

                    <label class="label">Name</label>
                    <input name="name" defaultValue={user?.displayName} type="text" class="input" placeholder="Name" />
                    <label class="label">Email</label>
                    <input defaultValue={user?.email} disabled type="text" class="input" placeholder="My awesome page" />

                    <label class="label">Photo</label>
                    <input defaultValue={user?.photoURL} name="photo" type="text" class="input" placeholder="Photo Url" />
                    <input type="submit" class="btn" value={'Update'} />
                </fieldset>
            </form>
        </div>
    );
};

export default Profile;