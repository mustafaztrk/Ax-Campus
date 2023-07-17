package com.shubh.kafkachat.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data //getter setter
@Entity
//@Table(name="users")
@AllArgsConstructor //ctor
@NoArgsConstructor
public class Activities {
    @Id//id alanını belirtme
    @GeneratedValue(strategy = GenerationType.IDENTITY)//id au artıcak
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="activityType")
    private int activityType;

    @Column(name="quota")
    private int quota;

    @Column(name="strDate")
    private String strDate;

    @Column(name="endDate")
    private String endDate;

    @Column(name="CreativeId")
    private String CreativeId;

}
