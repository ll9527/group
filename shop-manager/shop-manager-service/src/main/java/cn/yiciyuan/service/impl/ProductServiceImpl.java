package cn.yiciyuan.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.yiciyuan.mapper.ProductMapper;
import cn.yiciyuan.pojo.Product;
import cn.yiciyuan.service.ProductService;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductMapper pm;
	
	@Override
	public List<Product> getProductByCriteria(Integer cid) {
		List<Product> product = pm.queryProductByCriteria(cid);
		return product;
	}

}
