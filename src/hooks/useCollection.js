import { collection, query, where, getDocs, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

export function useCollection({ collectionName, condition, order }) {
    let [data, setData] = useState([])

    const q = query(collection(db, collectionName), where(...condition), orderBy(...order));

    useEffect(() => {
        onSnapshot(q, (querySnapshot) => {
            const courses = [];
            querySnapshot.forEach((doc) => {
                console.log(doc);
                courses.push({ id: doc.id, ...doc.data() });
            });
            setData(courses);
        });

    }, [collectionName])

    return { data }
}