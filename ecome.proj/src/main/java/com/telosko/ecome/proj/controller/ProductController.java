package com.telosko.ecome.proj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.telosko.ecome.proj.model.Product;
import com.telosko.ecome.proj.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {
	@Autowired
	private ProductService service;
	
	@RequestMapping("/")
	public String grate()
	{
		return "Hello -world";
	}
	//select * from product
	@GetMapping("/products")
	public List<Product> getAllProducts()
	{
		return service.getAllPoducts();
	}
	@GetMapping("/product/{id}")
	public Product getProduct(@PathVariable int id)
	{
		return service.getProductById(id);
	}
	
	@PostMapping("/product")
	public ResponseEntity<?> addProduct(@RequestPart Product product , @RequestPart MultipartFile imageFile)
	{
		
		try {
		Product product1 = service.addProduct(product,imageFile);
		return new ResponseEntity<>(product1, HttpStatus.CREATED );
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("/product/{productId}/image")
	public ResponseEntity<byte[]> getImageProductId(@PathVariable int productId)
	{
		Product product=service.getProductById(productId);
		byte[] imageFile=product.getImageDate();
		return ResponseEntity.ok().contentType(MediaType.valueOf(product.getImageType())).body(imageFile);
		
	}
	
	@PutMapping("/product/{id}")
	public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestPart Product product , @RequestPart MultipartFile imageFile)
	{
		 Product product1 = null;
		 try {
			 product1= service.updateProduct(id,product,imageFile);
		 }
		 catch(Exception e)
		 {
			 return new ResponseEntity<>("Failed", HttpStatus.BAD_REQUEST);
		 }
		 if(product1 != null)
		 {
			 return new ResponseEntity<>("updated", HttpStatus.OK);
		 }
		 else 
		 {
			 return new ResponseEntity<>("Failed", HttpStatus.BAD_REQUEST);
		 }
	}
	
	@DeleteMapping("/product/{id}")
	public ResponseEntity<String> deleteeProduct(@PathVariable int id)
	{
		Product product =service.getProductById(id);
		if(product!=null) {
		service.deleteProduct(id);
		return new ResponseEntity<>("deleted",HttpStatus.OK);
		}
		else 
			 return new ResponseEntity<>("deleted",HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/products/search")
	public ResponseEntity<List<Product>> searchProduct(String keyword)
	{
		List<Product> products = service.searchProduct(keyword);
		return new ResponseEntity<>(products,HttpStatus.OK);
	}
	
	

}
