package com.shubh.kafkachat.Api.Controllers;


import com.shubh.kafkachat.Business.Abstract.IActivitiesService;
import com.shubh.kafkachat.Entities.Activities;
import com.shubh.kafkachat.Entities.User;
import com.shubh.kafkachat.core.utilities.results.DataResult;
import com.shubh.kafkachat.core.utilities.results.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@RestController
@CrossOrigin//tarıyıcı ve back-end arası güvensizlik çözer
@RequestMapping("/api")
public class ActivitiController {

    @Autowired
    private IActivitiesService activitiesService;

    @GetMapping("/activities/getall")
    public DataResult<ArrayList<Activities>> GetAll()  throws ExecutionException, InterruptedException {
        return activitiesService.getAll();
    }
    @GetMapping("/activities/getall2")
    public ArrayList<Activities> GetAll2()  throws ExecutionException, InterruptedException {
        return activitiesService.GetAll();
    }
    @PostMapping("/activities/add")
    public Result add(@RequestBody Activities activities) throws ExecutionException, InterruptedException {

        return activitiesService.add(activities);
    }
    @GetMapping("/activities/getByActivitiName/{name}")
    public DataResult<Activities> getByUserName(@PathVariable String name) throws ExecutionException, InterruptedException {

        return activitiesService.getByName(name);
    }
    @GetMapping("/activities/getByActivitiId/{id}")
    public DataResult<Activities> getByActivitiId(@PathVariable int id) throws ExecutionException, InterruptedException {

        return activitiesService.getById(id);
    }

}
