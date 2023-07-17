package com.shubh.kafkachat.Api.Controllers;


import com.shubh.kafkachat.Business.Abstract.IActivitiAndUserService;
import com.shubh.kafkachat.Business.Abstract.IActivitiesService;
import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.ActivityAndUser;
import com.shubh.kafkachat.core.utilities.results.DataResult;
import com.shubh.kafkachat.core.utilities.results.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@RestController
@CrossOrigin//tarıyıcı ve back-end arası güvensizlik çözer
@RequestMapping("/api")
public class ActivityAndUserController {
    @Autowired
    private IActivitiAndUserService activitiesService;
    @GetMapping("/activitiAndUser/getall")
    public DataResult<ArrayList<ActivityAndUser>> GetAll()  throws ExecutionException, InterruptedException {
        return activitiesService.getAll();
    }
    @GetMapping("/activitiAndUser/getall2")
    public ArrayList<ActivityAndUser> GetAll2()  throws ExecutionException, InterruptedException {
        return activitiesService.GetAll();
    }
    @PostMapping("/activitiAndUser/add")
    public Result add(@RequestBody ActivityAndUser activities) throws ExecutionException, InterruptedException {

        return activitiesService.add(activities);
    }
}
