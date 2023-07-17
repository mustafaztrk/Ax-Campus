package com.shubh.kafkachat.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Map;

@Data //getter setter
@Entity
@Table(name="activityAndUser")
@AllArgsConstructor //ctor
@NoArgsConstructor
public class ActivityAndUser {
    @Id//id alanını belirtme
    @GeneratedValue(strategy = GenerationType.IDENTITY)//id au artıcak
    @Column(name="id")
    private int id;

    @Column(name="activiti")
    private String name;

    @Column(name = "users")
    @Transient
    private ArrayList<Object> users;
}
