import { useSelector } from 'react-redux';
import { selectSessionData } from 'redux/slices/sessionSlice';

const useSession = () => useSelector(selectSessionData);

export default useSession;
