import { collection, query, where, getDocs, onSnapshot, orderBy, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

// Updated hook to handle both collection and single document fetching
export function useCollection({ collectionName, condition, order, docId }) {
    let [data, setData] = useState([]);

    useEffect(() => {
        if (docId) {
            // Fetch single document by ID
            const docRef = doc(db, collectionName, docId);
            getDoc(docRef).then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    setData([{ id: docSnapshot.id, ...docSnapshot.data() }]);
                } else {
                    setData([]);
                }
            }).catch((error) => {
                console.error("Error fetching document:", error);
            });
        } else {
            // Fetch collection with conditions
            const q = query(
                collection(db, collectionName),
                where(...condition),
                orderBy(...order)
            );

            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({ id: doc.id, ...doc.data() });
                });
                setData(items);
            });

            // Clean up the subscription on unmount
            return () => unsubscribe();
        }
    }, [collectionName, docId]);

    return { data };
}
