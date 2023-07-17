package com.shubh.kafkachat.Business.Concrete;

import com.shubh.kafkachat.Business.Abstract.IActivitiAndUserService;
import com.shubh.kafkachat.Business.Abstract.IActivitiesService;
import com.shubh.kafkachat.DataAccess.Concrete.Abstract.IActivitiAndUserDao;
import com.shubh.kafkachat.DataAccess.Concrete.Abstract.IActivitiesDao;
import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.ActivityAndUser;
import com.shubh.kafkachat.core.utilities.results.DataResult;
import com.shubh.kafkachat.core.utilities.results.Result;
import com.shubh.kafkachat.core.utilities.results.SuccessDataResult;
import com.shubh.kafkachat.core.utilities.results.SuccessResult;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@Service
public class ActivityAndUserManager implements IActivitiAndUserService {
    IActivitiAndUserDao activitiesDao;

    public ActivityAndUserManager(IActivitiAndUserDao activitiesDao) {
        this.activitiesDao = activitiesDao;
    }

    @Override
    public Result add(ActivityAndUser entity) throws ExecutionException, InterruptedException {
        activitiesDao.Add(entity);
        return  new SuccessResult("Kullanıcı Eklendi.");
    }

    @Override
    public Result update(ActivityAndUser entity) {
        return null;
    }

    @Override
    public Result delete(int id) {
        return null;
    }

    @Override
    public DataResult<ArrayList<ActivityAndUser>> getAll() throws ExecutionException, InterruptedException {
        return new SuccessDataResult<ArrayList<ActivityAndUser>>(activitiesDao.GetAll());
    }

    @Override
    public ArrayList<ActivityAndUser> GetAll() throws ExecutionException, InterruptedException {
        return activitiesDao.GetAll();
    }
}
