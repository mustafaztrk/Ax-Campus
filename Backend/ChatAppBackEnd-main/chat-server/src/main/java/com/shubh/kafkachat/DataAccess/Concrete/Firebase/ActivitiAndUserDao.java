package com.shubh.kafkachat.DataAccess.Concrete.Firebase;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.shubh.kafkachat.DataAccess.Concrete.Abstract.IActivitiAndUserDao;
import com.shubh.kafkachat.DataAccess.Concrete.Abstract.IActivitiesDao;
import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.ActivityAndUser;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.ExecutionException;

@Service
public class ActivitiAndUserDao implements IActivitiAndUserDao {
    private static final String COLLECTION_NAME="activityAndUser";
    @Override
    public ArrayList<ActivityAndUser> GetAll() throws ExecutionException, InterruptedException {
        Firestore dbFirestore= FirestoreClient.getFirestore();

        Iterable<DocumentReference> documentReference= dbFirestore.collection(COLLECTION_NAME).listDocuments();
        Iterator<DocumentReference> iterator=documentReference.iterator();

        ArrayList<ActivityAndUser> activitiesList=new ArrayList<>();
        ActivityAndUser activiti=null;


        while (iterator.hasNext()){
            DocumentReference documentReference1=iterator.next();
            ApiFuture<DocumentSnapshot> future=documentReference1.get();
            DocumentSnapshot document=future.get();

            activiti=document.toObject(ActivityAndUser.class);
            activitiesList.add(activiti);

        }
        return activitiesList;
    }

    @Override
    public void Add(ActivityAndUser entity) throws ExecutionException, InterruptedException {
        Firestore dbFirestore= FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionApiFuture= dbFirestore.collection(COLLECTION_NAME).document(entity.getName()).set(entity);
    }

    @Override
    public void Update(ActivityAndUser entity) {

    }

    @Override
    public void Delete(ActivityAndUser entity) {

    }
}
