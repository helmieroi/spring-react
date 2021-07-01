package net.project.client.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.project.client.springboot.model.Client;
import net.project.client.springboot.repository.ClientsRepository;

@SpringBootApplication
public class ProjetClientsApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ProjetClientsApplication.class, args);
	}
	 @Autowired
	    private ClientsRepository clientsRepository; 
		@Override
		public void run(String... args) throws Exception {
			this.clientsRepository.save(new Client("Helmi","Ben eroi","helmieroi7@gmail.com"));
			this.clientsRepository.save(new Client("Mohamed","soltani","soltani.Mohamed.7@gmail.com"));
			this.clientsRepository.save(new Client("Maha","Mohamed","Maha_Mohamed47@gmail.com"));
			
			
			
		}
}
