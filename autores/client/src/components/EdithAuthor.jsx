import axios from "axios";
import Formulario from "./FormComponent";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditAuthor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        name: "",
        lastName: "",
    });

    useEffect(() => {
        const getAuthorDetail = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/author/${id}`
                );
                if (response.status === 200) {
                    setInitialValues({
                        name: response.data.name,
                        lastName: response.data.lastName,
                    });
                }
            } catch (error) {
                navigate("/404-page-not-found");
                console.log("error al obtener el autor", error);
            }
        };
        getAuthorDetail();
    }, [id, navigate]);
    const onSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.put(
                `http://localhost:8000/api/author/${id}`,
                values
            );
            if (response.status === 200) {
                Swal.fire({
                    title: "Exito",
                    text: "Autor actualizado correctamente",
                    icon: "success",
                });
                resetForm();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container">
            <h3 className="text-left mt-5">Favorite Authors</h3>
            <Link to="/">Home</Link>
            <h4 className="text-left mt-3">Edit this author</h4>
            <Formulario initialValues={initialValues} onSubmit={onSubmit} />
        </div>
    );
};

export default EditAuthor;