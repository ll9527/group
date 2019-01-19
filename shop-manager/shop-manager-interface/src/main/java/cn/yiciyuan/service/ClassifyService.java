package cn.yiciyuan.service;

import java.util.List;

import cn.yiciyuan.pojo.SearchPage;

public interface ClassifyService {
	/**
	 * 获得分类名字
	 * @return
	 */
	List<SearchPage> getClassifyList();
	
}
