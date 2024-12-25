package Ecommers.project.E_Commers.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Ecommers.project.E_Commers.mdel.Product;
import Ecommers.project.E_Commers.repo.ProductRepo;

@Service
public class ProductService {
	@Autowired
	ProductRepo repo;

	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	public Product findById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
		
	}

	public void save(Product product) {
		// TODO Auto-generated method stub
		repo.save(product);
		
	}

}
