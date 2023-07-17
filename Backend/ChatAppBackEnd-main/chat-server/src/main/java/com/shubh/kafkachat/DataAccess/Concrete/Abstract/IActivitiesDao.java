package com.shubh.kafkachat.DataAccess.Concrete.Abstract;

import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.User;
import com.shubh.kafkachat.core.Abstract.IEntityRepository;

import java.util.concurrent.ExecutionException;

public interface IActivitiesDao extends IEntityRepository<Activities> {
    public Activities getByName(String name) throws ExecutionException, InterruptedException;
    public Activities getById(int id) throws ExecutionException, InterruptedException;
}
