package com.nitesh.repository;

import com.nitesh.model.Project;
import com.nitesh.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

//    List<Project> findByOwner(User user); //to get list of project created by user

    List<Project> findByNameContainingAndTeamContains(String partialName, User user); // find the project using name

//    @Query("SELECT p FROM Project p JOIN p.team t WHERE t = :user")
//    List<Project>findProjectByTeam(@Param("user") User user);

    List<Project> findByTeamContainingOrOwner(User user, User owner);

}
