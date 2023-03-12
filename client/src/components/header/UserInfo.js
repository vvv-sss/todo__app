// ___Redux___________________________________________________________________________________________________________
import { useSelector } from 'react-redux';
import { setToken } from '../auth/authSlice';
// ___Assets__________________________________________________________________________________________________________
import UserIcon from '../../assets/icons/user_icon.png'
// ___Helpers_________________________________________________________________________________________________________
import { userLogout } from '../../helpers/userLogout';
import { userTokenRefresh } from '../../helpers/userTokenRefresh';

const UserInfo = () => {

    const token = useSelector(state => state.auth.accessToken)

    const handleSignOut = async () => {
        await userLogout();
        window.location.reload();  
    }

    const handleRefresh = async() => {
        const refreshedToken = await userTokenRefresh(token);
        !refreshedToken.message && setToken(refreshedToken);
    }

    return ( 
        <div className='user-info'>
            <div className='user-info-container'>
                <img src={ UserIcon } alt='Icon with cat face' />
            </div>
            <button onClick={ handleRefresh }>Refresh Token</button>
            <button 
            type='button' 
            onClick={ handleSignOut }
            >
                Logout
            </button>
        </div>
    );
}

export default UserInfo;