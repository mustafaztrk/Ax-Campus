package com.shubh.kafkachat.Business.Abstract;

import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.ActivityAndUser;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

public interface IActivitiAndUserService extends BaseEntityService<ActivityAndUser> {
    ArrayList<ActivityAndUser> GetAll() throws ExecutionException, InterruptedException;
}
