package cn.yiciyuan.service;

import java.util.List;

import cn.yiciyuan.pojo.Product;

public interface ProductService{
	List<Product> getProductByCriteria(Integer cid);
}
