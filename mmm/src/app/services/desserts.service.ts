import { Injectable } from '@angular/core';
import { ref } from '@angular/fire/database';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { getDownloadURL, uploadString } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Dessert } from './desserts';
//import { Dessert } from 'src/app/pages/desserts';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor(
    private firestore: Firestore,
    private storage: Storage
    ) { }

    getDesserts(): Observable<Dessert[]> {
      const dessertRef = collection(this.firestore,'desserts');
      return collectionData(dessertRef, {idField:'id'}) as Observable<Dessert[]>;
    }
  
    getDessertById(id:string): Observable<Dessert> {
      const dessertRef = doc(this.firestore,`desserts/${id}`);
      return docData(dessertRef, {idField:'id'}) as Observable<Dessert>;
    }
  
    addDessert(dessert:Dessert){
      const dessertRef = collection(this.firestore,'desserts');
      return addDoc(dessertRef,dessert);
    }
  
    deleteDessert(dessert:Dessert){
      const dessertRef = doc(this.firestore,`desserts/${dessert.id}`);
      return deleteDoc(dessertRef);
    }
  
    updateDessert(dessert:Dessert){
      const dessertRef = doc(this.firestore,`desserts/${dessert.id}`);
      return updateDoc(dessertRef, 
        {
          ingredientes: dessert.ingredientes,
          nombre: dessert.nombre,
          origen: dessert.origen,
          preparacion: dessert.preparacion
      });
    }
  
    /*async changePhoto(cameraFile: Photo, dessert:Dessert){
      const path = `uploads/${dessert.id}/profile.png`;
      const storageRef = ref(this.storage, path);
  
      try {
        await uploadString(storageRef, cameraFile.base64String || '', 'base64');
  
        const imageUrl = await getDownloadURL(storageRef);
        const dessertRef = doc(this.firestore,`desserts/${dessert.id}`);
        await setDoc(dessertRef, {imageUrl}, {merge:true});
        return true;
      }
      catch(error){
        return false;
      }
  
    }*/
}
