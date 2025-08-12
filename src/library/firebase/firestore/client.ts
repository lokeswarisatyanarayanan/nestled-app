import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query as buildQuery,
  where,
  orderBy,
  limit,
  startAfter,
  endBefore,
  QueryConstraint,
} from '@react-native-firebase/firestore';
import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export type WithId<T> = T & { id: string };

const logPrefix = '[🔥 Firestore]';
const db = getFirestore();

export const getCollection = async <T>(path: string): Promise<WithId<T>[]> => {
  try {
    const snapshot = await getDocs(collection(db, path));
    return snapshot.docs.map((docSnap: FirebaseFirestoreTypes.QueryDocumentSnapshot) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as WithId<T>[];
  } catch (err) {
    console.error(`${logPrefix} Failed to fetch collection "${path}"`, err);
    throw new Error('Failed to fetch collection');
  }
};

export const getDocById = async <T>(path: string, id: string): Promise<WithId<T> | null> => {
  try {
    const docRef = doc(db, path, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? ({ id: docSnap.id, ...docSnap.data() } as WithId<T>) : null;
  } catch (err) {
    console.error(`${logPrefix} Failed to fetch doc "${path}/${id}"`, err);
    throw new Error('Failed to fetch document');
  }
};

export const addDocument = async <T extends FirebaseFirestoreTypes.DocumentData>(
  path: string,
  data: T,
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, path), data);
    return docRef.id;
  } catch (err) {
    console.error(`${logPrefix} Failed to add doc to "${path}"`, err);
    throw new Error('Failed to add document');
  }
};

export const updateDocument = async (
  path: string,
  id: string,
  data: Partial<FirebaseFirestoreTypes.DocumentData>,
): Promise<void> => {
  try {
    await updateDoc(doc(db, path, id), data);
  } catch (err) {
    console.error(`${logPrefix} Failed to update doc "${path}/${id}"`, err);
    throw new Error('Failed to update document');
  }
};

export const deleteDocument = async (path: string, id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, path, id));
  } catch (err) {
    console.error(`${logPrefix} Failed to delete doc "${path}/${id}"`, err);
    throw new Error('Failed to delete document');
  }
};

export const queryCollection = async <T>(
  path: string,
  queryConstraints: QueryConstraint[],
): Promise<WithId<T>[]> => {
  try {
    const q = buildQuery(collection(db, path), ...queryConstraints);
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap: FirebaseFirestoreTypes.QueryDocumentSnapshot) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as WithId<T>[];
  } catch (err) {
    console.error(`${logPrefix} Failed to query collection "${path}"`, err);
    throw new Error('Failed to query collection');
  }
};

export const queryHelpers = {
  where,
  orderBy,
  limit,
  startAfter,
  endBefore,
};
