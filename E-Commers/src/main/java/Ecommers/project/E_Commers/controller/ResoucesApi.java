package Ecommers.project.E_Commers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Ecommers.project.E_Commers.mdel.Product;
import Ecommers.project.E_Commers.services.ProductService;


@RestController
@CrossOrigin()
public class ResoucesApi {
	@Autowired
	private ProductService sercives;
	
	@GetMapping("/products")
	public List<Product> AllProducts()
	{
		return sercives.getAllProducts();
	}
	@GetMapping("/product/{id}")
	public Product getProduct(@PathVariable int id)
	{
		return sercives.findById(id);
	}
	@PostMapping("/product")
	public void addProduct(@RequestBody Product product)
	{
		sercives.save(product);
		
	}
	
}
