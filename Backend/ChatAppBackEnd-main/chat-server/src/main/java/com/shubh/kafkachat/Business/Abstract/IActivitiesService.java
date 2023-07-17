package com.shubh.kafkachat.Business.Abstract;

import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.User;
import com.shubh.kafkachat.core.utilities.results.DataResult;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

public interface IActivitiesService extends BaseEntityService<Activities> {
    ArrayList<Activities> GetAll() throws ExecutionException, InterruptedException;
    DataResult<Activities> getByName(String name) throws ExecutionException, InterruptedException;
    DataResult<Activities> getById(int id) throws ExecutionException, InterruptedException;

}
