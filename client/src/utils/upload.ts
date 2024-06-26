import axios from "axios";

// use cloudinary 
const upload = async (file: any) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "reservation");

    try {
        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/gmnayeem/image/upload",
            data
        );

        const { url } = res.data;
        return url;
    } catch (err) {
        console.log(err);
    }
};

export default upload;