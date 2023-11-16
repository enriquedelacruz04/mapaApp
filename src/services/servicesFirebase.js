import { initializeApp } from "firebase/app";
import {
   collection,
   addDoc,
   getDocs,
   doc,
   updateDoc,
   getDoc,
   deleteDoc,
   getFirestore,
   onSnapshot,
   query,
   where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useState, useEffect } from "react";

const firebaseConfig = {
   apiKey: "AIzaSyCY47GaSn568T5uA7dbc6515YSQVwnGS_4",
   authDomain: "cuidadh2o-53c3f.firebaseapp.com",
   databaseURL: "https://cuidadh2o-53c3f-default-rtdb.firebaseio.com",
   projectId: "cuidadh2o-53c3f",
   storageBucket: "cuidadh2o-53c3f.appspot.com",
   messagingSenderId: "857242653176",
   appId: "1:857242653176:web:828f9e343938b5af9e460d",
};

//=========================  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const servicesFirebase = {
   //========================= Generales
   getAll: async function (collectionName) {
      let items = [];
      try {
         const collectionRef = collection(db, collectionName);
         const querySnapshot = await getDocs(collectionRef);
         querySnapshot.forEach((doc) => {
            const item = { ...doc.data(), id: doc.id };
            items.push(item);
         });
      } catch (error) {
         console.error(`Error en: servicesFirebase.getAll.${collectionName} => ${error}`);
         items = null;
      }
      return items;
   },

   getAllTipo: async function (collectionName, setList) {
      try {
         const q = collection(db, collectionName);
         const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
               const item = { ...doc.data(), id: doc.id };
               items.push(item);
            });
            console.log(items);
            setList(items);
         });
      } catch (error) {
         console.error(`Error en: servicesFirebase.getAllTipo.${collectionName} => ${error}`);
      }
   },

   //========================= Generales
   getAllCiudad: async function (collectionName, ciudad) {
      let items = [];
      try {
         const collectionRef = collection(db, collectionName);
         const consult = where("municipio", "==", ciudad);
         const querySnapshot = await getDocs(query(collectionRef, consult));
         querySnapshot.forEach((doc) => {
            const item = { ...doc.data(), id: doc.id };
            items.push(item);
         });
      } catch (error) {
         console.error(`Error en: servicesFirebase.getAll.${collectionName} => ${error}`);
         items = null;
      }
      return items;
   },

   getAllRealCiudad: async function (collectionName, ciudad, setList) {
      try {
         const consult = where("municipio", "==", ciudad);

         const q = query(collection(db, collectionName), consult);
         const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
               const item = { ...doc.data(), id: doc.id };
               items.push(item);
            });
            console.log(items[0]);
            setList(items[0]);
         });
      } catch (error) {
         console.error(`Error en: servicesFirebase.getAll.${collectionName} => ${error}`);
      }
   },

   getOne: async function (id, collectionName) {
      let item = null;
      try {
         const docRef = doc(db, `${collectionName}/${id}`);
         const docSnap = await getDoc(docRef);
         if (docSnap.data()) {
            item = { ...docSnap.data(), id: docRef.id };
         }
      } catch (error) {
         console.error(`Error en: servicesFirebase.getOne.${collectionName} => ${error}`);
         item = null;
      }
      return item;
   },

   create: async function (data, collectionName) {
      let response = null;
      try {
         const collectionRef = collection(db, collectionName);
         const docRef = await addDoc(collectionRef, data);
         if (docRef.id) {
            console.log(`Documento escrito con el id: ${docRef.id} en servicesFirebase.create.${collectionName}`);
            response = docRef.id;
         }
      } catch (error) {
         console.error(`Error en: servicesFirebase.create.${collectionName} => ${error}`);
         response = null;
      }
      return response;
   },

   edit: async function (data, id, collectionName) {
      let response = null;
      try {
         const docRef = doc(db, `${collectionName}/${id}`);
         await updateDoc(docRef, data);
         if (docRef.id) {
            console.log(`Documento editado con el id: ${docRef.id} en servicesFirebase.edit.${collectionName}`);
            response = docRef.id;
         }
      } catch (error) {
         console.error(`Error en: servicesFirebase.edit.${collectionName} => ${error}`);
         response = null;
      }
      return response;
   },

   delete: async function (id, collectionName) {
      let response = null;
      try {
         const docRef = doc(db, `${collectionName}/${id}`);
         await deleteDoc(docRef);
         if (docRef.id) {
            console.log(`Documento eliminado con el id: ${docRef.id} en servicesFirebase.delete.${collectionName}`);
            response = docRef.id;
         }
      } catch (error) {
         console.error(`Error en: servicesFirebase.delete.${collectionName} => ${error}`);
         response = null;
      }
      return response;
   },

   app,
   db,
};

export { servicesFirebase };
