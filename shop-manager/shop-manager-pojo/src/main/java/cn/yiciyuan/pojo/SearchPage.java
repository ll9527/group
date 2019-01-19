package cn.yiciyuan.pojo;

import java.util.List;
/**
 * 搜索页面的初始数据对象
 * @author Administrator
 *
 */
public class SearchPage {
	
	public SearchPage() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SearchPage(Integer id, String name, List<Classify> twoLevelName) {
		super();
		this.id = id;
		this.name = name;
		this.twoLevelName = twoLevelName;
	}
	private Integer id;
//	一级目录的名字
	private String name;
//	二级目录的名字
	private List<Classify> twoLevelName;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Classify> getTwoLevelName() {
		return twoLevelName;
	}
	public void setTwoLevelName(List<Classify> twoLevelName) {
		this.twoLevelName = twoLevelName;
	}
	
}
