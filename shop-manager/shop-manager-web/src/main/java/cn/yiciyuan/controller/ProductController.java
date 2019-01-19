package cn.yiciyuan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.yiciyuan.pojo.Product;
import cn.yiciyuan.service.ProductService;

@Controller
public class ProductController {
	
	@Autowired
	private ProductService ps;
	
	@RequestMapping("/search")
	@ResponseBody
	private List<Product> getProductByCriteria(Integer cid){
		if(cid != null){
			List<Product> productList = ps.getProductByCriteria(cid);
			return productList;
		}else {
			System.out.println("aaa");
			return null;
		}
	}
}
