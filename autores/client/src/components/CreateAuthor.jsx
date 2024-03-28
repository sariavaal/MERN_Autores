import axios from "axios";
import Formulario from "./FormComponent";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateAuthor = () => {

    const initialValues = {
        name: "",
        lastName: "",
    }

    const navigate = useNavigate();
    const onSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/author",
                values
            );
            if (response.status === 200) {
                //alert("Author created successfully");
                Swal.fire({
                    title: "Exito",
                    text: "Autor creado correctamente",
                    icon: "success"
                })
                resetForm();
                navigate("/");
            } else {
                console.log("Failed to create author");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container">
            <h3 className="text-left mt-5">Favorite Authors</h3>
            <Link to="/">Home</Link>
            <h4 className="text-left mt-3">Add a new author</h4>
            <Formulario onsubmit={onSubmit} initialValues={initialValues} />
        </div>
    );
}

export default CreateAuthor