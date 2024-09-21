import { useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { useEffect } from "react";
import axios from "axios";


function RefreshHandler({ handleIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const token = Cookies.get('token');
                const response = await axios.post('/api/verify', {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.data.data.success) {
                    handleIsAuthenticated();
                    if (location.pathname === '/login' ||
                        location.pathname === '/signup'
                    ) {
                        navigate('/', { replace: false });
                    }
                }
            } catch (error) {
                console.log(error);
            }

        }

        verifyToken();
    }, [location, navigate, handleIsAuthenticated]);

    return (
        null
    )
}

export default RefreshHandler;