package cn.yiciyuan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.yiciyuan.pojo.SearchPage;
import cn.yiciyuan.service.ClassifyService;

@Controller
public class ClassifyController {
	@Autowired
	private ClassifyService classifyService;
	
	@RequestMapping("/classify")
	@ResponseBody
	private List<SearchPage> getClassifyName() {
		List<SearchPage> classifyList = classifyService.getClassifyList();
		return classifyList;
	}
}
