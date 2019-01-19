package cn.yiciyuan.mapper;

import java.util.List;

import cn.yiciyuan.pojo.Product;

public interface ProductMapper {
	
	List<Product> queryProductByCriteria(Integer cid);
}
