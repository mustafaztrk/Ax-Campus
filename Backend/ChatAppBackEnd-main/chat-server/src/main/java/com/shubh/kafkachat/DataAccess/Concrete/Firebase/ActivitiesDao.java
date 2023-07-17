package com.shubh.kafkachat.DataAccess.Concrete.Firebase;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.shubh.kafkachat.DataAccess.Concrete.Abstract.IActivitiesDao;
import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.ExecutionException;


@Service
public class ActivitiesDao implements IActivitiesDao {
    private static final String COLLECTION_NAME="Activities";
    @Override
    public ArrayList<Activities> GetAll() throws ExecutionException, InterruptedException {
        Firestore dbFirestore= FirestoreClient.getFirestore();

        Iterable<DocumentReference> documentReference= dbFirestore.collection(COLLECTION_NAME).listDocuments();
        Iterator<DocumentReference> iterator=documentReference.iterator();

        ArrayList<Activities> activitiesList=new ArrayList<>();
        Activities activiti=null;


        while (iterator.hasNext()){
            DocumentReference documentReference1=iterator.next();
            ApiFuture<DocumentSnapshot> future=documentReference1.get();
            DocumentSnapshot document=future.get();

            activiti=document.toObject(Activities.class);
            activitiesList.add(activiti);

        }
        return activitiesList;
    }
    public String saveActiviti(Activities activiti) throws ExecutionException, InterruptedException {

        Firestore dbFirestore= FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture= dbFirestore.collection(COLLECTION_NAME).document(activiti.getName()).set(activiti);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

    @Override
    public void Add(Activities entity) throws ExecutionException, InterruptedException {
        Firestore dbFirestore= FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionApiFuture= dbFirestore.collection(COLLECTION_NAME).document(entity.getName()).set(entity);
    }

    @Override
    public void Update(Activities entity) {

    }

    @Override
    public void Delete(Activities entity) {

    }
    @Override
    public Activities getByName(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore= FirestoreClient.getFirestore();

        DocumentReference documentReference= dbFirestore.collection(COLLECTION_NAME).document(name);

        ApiFuture<DocumentSnapshot> future=documentReference.get();

        DocumentSnapshot document=future.get();

        Activities activities=null;
        if (document.exists()){
            activities=document.toObject(Activities.class);
            return activities;
        }
        else{
            return null;
        }
    }

    @Override
    public Activities getById(int id) throws ExecutionException, InterruptedException {
        Firestore dbFirestore= FirestoreClient.getFirestore();

        DocumentReference documentReference= dbFirestore.collection(COLLECTION_NAME).document(String.valueOf(id));

        ApiFuture<DocumentSnapshot> future=documentReference.get();

        DocumentSnapshot document=future.get();

        Activities activities=null;
        if (document.exists()){
            activities=document.toObject(Activities.class);
            return activities;
        }
        else{
            return null;
        }
    }
}
