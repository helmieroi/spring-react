package net.project.client.springboot.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import net.project.client.springboot.model.Client;
@Repository
public interface ClientsRepository extends JpaRepository<Client,Long>{

	@Query("select s from Client s where nom like %?1%")
	List<Client> findByName(String nom);
}