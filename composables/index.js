import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../service/firebase";

export const uploadFile = async (file, path) => {
  try {
    if (!file) throw new Error("File required");
    const fileRef = ref(storage, path);

    await uploadBytes(fileRef, file);

    // Get the download URL for the uploaded file

    const url = await getDownloadURL(fileRef);
    // console.log("upload success", url);

    return { url, path };
  } catch (error) {
    console.log("error uploading file", error.message);
    throw error;
  }
};
