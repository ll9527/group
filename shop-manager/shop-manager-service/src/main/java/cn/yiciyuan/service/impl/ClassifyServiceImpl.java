package cn.yiciyuan.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.yiciyuan.mapper.ClassifyMapper;
import cn.yiciyuan.pojo.Classify;
import cn.yiciyuan.pojo.SearchPage;
import cn.yiciyuan.service.ClassifyService;

@Service
public class ClassifyServiceImpl implements ClassifyService{
	
	@Autowired
	private ClassifyMapper cm;

	@Override
	public List<SearchPage> getClassifyList() {
		List<Classify> oneLevelName = cm.queryOneLevelName();
		ArrayList<SearchPage> searchPageList = new ArrayList<SearchPage>();
		for (Classify c : oneLevelName) {
			searchPageList.add(
					new SearchPage(
							c.getClass_id(), c.getClass_name(), cm.queryTwoLevelNameListById(c.getClass_id())
						)
				);
		}
		return searchPageList;
	}
	
}
