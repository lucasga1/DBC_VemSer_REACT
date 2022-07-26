import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function About() {

    const navigate = useNavigate();
    const isLoged = false;

    useEffect(() => {
        if(isLoged) {
            navigate('/contato')
        }
    },[])

    return (
        <div>About</div>
    )
}
export default About