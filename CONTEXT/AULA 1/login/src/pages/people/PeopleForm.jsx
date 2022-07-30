import FormComponent from "./component/FormComponent";
import { PeopleContext } from "../../context/PeopleContext";
import { useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';

function PeopleForm() {

    const { isUpdate, setIsUpdate, getPessoaId, user } = useContext(PeopleContext);
    const { id } = useParams();

    const setup = () => {
        if (id) {
            setIsUpdate(true);
            getPessoaId(id);
        }
    }

    useEffect(() => {
        setup();
    }, [])


    return (
        <div>
            <FormComponent isUpdate={isUpdate} user={user} id={id} />
        </div>

    )
}
export default PeopleForm