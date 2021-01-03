import { useEffect, useState } from "react";
import { projectStorage, projectFireStore, timestamp} from '../Firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setURL] = useState(null);

    useEffect ( () => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },
        (err) => {
            setError(err);
        },
        async () => {
            const url = await storageRef.getDownloadURL();
            setURL(url);    
            const createdAt = timestamp();
            collectionRef.add({url, createdAt});
        }
        )
    }, [file]);

    return {progress, url, error};
}

export default useStorage;