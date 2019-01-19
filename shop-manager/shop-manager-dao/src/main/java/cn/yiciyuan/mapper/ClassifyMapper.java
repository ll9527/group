package cn.yiciyuan.mapper;

import java.util.List;

import cn.yiciyuan.pojo.Classify;

public interface ClassifyMapper {
	/**
	 * 查询一级目录
	 * @return
	 */
	List<Classify> queryOneLevelName();
	/**
	 * 根据一级目录的id查询二级目录
	 * @param key
	 * @return
	 */
	List<Classify> queryTwoLevelNameListById(int id);
}
