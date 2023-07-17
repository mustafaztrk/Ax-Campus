package com.shubh.kafkachat.Business.Concrete;

import com.shubh.kafkachat.Business.Abstract.IActivitiesService;
import com.shubh.kafkachat.DataAccess.Concrete.Abstract.IActivitiesDao;
import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.User;
import com.shubh.kafkachat.core.Abstract.IUserDao;
import com.shubh.kafkachat.core.utilities.results.DataResult;
import com.shubh.kafkachat.core.utilities.results.Result;
import com.shubh.kafkachat.core.utilities.results.SuccessDataResult;
import com.shubh.kafkachat.core.utilities.results.SuccessResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@Service
public class ActivitiManager implements IActivitiesService {
    IActivitiesDao activitiesDao;

    public ActivitiManager(IActivitiesDao activitiesDao) {
        this.activitiesDao = activitiesDao;
    }

    @Override
    public Result add(Activities entity) throws ExecutionException, InterruptedException {
        activitiesDao.Add(entity);
        return  new SuccessResult("Kullanıcı Eklendi.");
    }

    @Override
    public Result update(Activities entity) {
        return null;
    }

    @Override
    public Result delete(int id) {
        return null;
    }

    @Override
    public DataResult<ArrayList<Activities>> getAll() throws ExecutionException, InterruptedException {
        return new SuccessDataResult<ArrayList<Activities>>(activitiesDao.GetAll());
    }

    @Override
    public ArrayList<Activities> GetAll() throws ExecutionException, InterruptedException {
        return activitiesDao.GetAll();
    }

    @Override
    public DataResult<Activities> getByName(String name) throws ExecutionException, InterruptedException {
        return new SuccessDataResult<Activities>(activitiesDao.getByName(name));
    }

    @Override
    public DataResult<Activities> getById(int id) throws ExecutionException, InterruptedException {
        return new SuccessDataResult<Activities>(activitiesDao.getById(id));
    }
}
