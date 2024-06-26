import axios from "axios";
import Swal from "sweetalert2";

const DeleteAuthor = (id) => {
    Swal.fire({
        title: "Are you sure to delete this?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:8000/api/author/${id}`)
                .then((res) => {
                    console.log(res.data);
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });
}

export default DeleteAuthor;
        