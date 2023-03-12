// ___React___________________________________________________________________________________________________________
import { useNavigate } from "react-router-dom";
// ___Redux___________________________________________________________________________________________________________
import { useDispatch, useSelector } from "react-redux";
import { setGroupTitle, setGroupDescription } from './addGroupSlice';
// ___Components______________________________________________________________________________________________________
import HideBtn from "../buttons/HideBtn";
import SubmitBtn from "../buttons/SubmitBtn";
import GroupTitleInput from "../form/GroupTitleInput";
import DescriptionInput from "../form/DescriptionInput";
// ___Helpers_________________________________________________________________________________________________________
import { createGroup } from "../../helpers/createGroup";

const AddGroup = () => {

    const group = useSelector(state => state.addGroup);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createGroup(group);
        navigate("/groups");
    }

    return ( 
        <form 
            className="add-group"
            onSubmit={ (e) => handleSubmit(e) }
        >
            <HideBtn path="groups" />
            <GroupTitleInput 
                defaultValue={ group.groupTitle } 
                action={ setGroupTitle }
            />
            <DescriptionInput 
                defaultValue={ group.description } 
                action={ setGroupDescription }
            />
            <SubmitBtn text='Submit' />
        </form>
    );
}

export default AddGroup;