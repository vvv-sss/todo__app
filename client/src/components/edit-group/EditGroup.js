// ___React___________________________________________________________________________________________________________
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// ___Redux___________________________________________________________________________________________________________
import { useDispatch, useSelector } from "react-redux";
import { editGroupTitle, editGroupDescription } from './editGroupSlice';
// ___Components______________________________________________________________________________________________________
import HideBtn from "../buttons/HideBtn";
import GroupTitleInput from "../form/GroupTitleInput";
import DescriptionInput from "../form/DescriptionInput";
import RemoveGroup from "../form/RemoveGroup";
import SubmitBtn from "../buttons/SubmitBtn";
// ___Helpers_________________________________________________________________________________________________________
import { updateGroup } from "../../helpers/updateGroup";
import { deleteGroup } from "../../helpers/deleteGroup";


const EditGroup = () => {

    const group = useSelector(state => state.editGroup);

    const navigate = useNavigate();

    const { id } = useParams();

    const [removeClicked, setRemoveClicked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!removeClicked) {
            await updateGroup(group, id);
            navigate(`/groups/${id}`);
        } else {
            await deleteGroup(id);
            navigate("/groups");
        }
    }

    return group.id && ( 
        <form className="edit-group" onSubmit={ (e) => handleSubmit(e) }>
            <HideBtn path={ `groups/${id}` } />
            <GroupTitleInput 
                defaultValue={ group.groupTitle }
                action={ editGroupTitle }
            />
            <DescriptionInput 
                defaultValue={ group.groupDescription } 
                action={ editGroupDescription }
            />
            <RemoveGroup state={ removeClicked } action={ setRemoveClicked } />
            { !removeClicked && <SubmitBtn text='Submit' /> }
        </form>
    );
}

export default EditGroup;