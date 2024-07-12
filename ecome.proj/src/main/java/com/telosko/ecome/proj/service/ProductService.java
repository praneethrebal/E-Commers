package com.telosko.ecome.proj.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.telosko.ecome.proj.model.Product;
import com.telosko.ecome.proj.repo.ProductRepo;



@Service
public class ProductService {
	
	@Autowired
	private ProductRepo repo;
	

	public List<Product> getAllPoducts() {
		// TODO Auto-generated method stub
		return repo.findAll();
		}


	public Product getProductById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}


	public Product addProduct(Product product, MultipartFile imageFile) throws IOException {
		product.setImageName(imageFile.getOriginalFilename());
		product.setImageType(imageFile.getContentType());
		product.setImageDate(imageFile.getBytes());
		return repo.save(product);
		
	}


	public Product updateProduct(int id, Product product, MultipartFile imageFile) throws IOException {
		product.setImageName(imageFile.getOriginalFilename());
		product.setImageType(imageFile.getContentType());
		product.setImageDate(imageFile.getBytes());
		
		return repo.save(product);
	}


	public void deleteProduct(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
		
	}


	public List<Product> searchProduct(String keyword) {
		// TODO Auto-generated method stub
		return repo.searchProduct(keyword);
	}
	
	
	

}
