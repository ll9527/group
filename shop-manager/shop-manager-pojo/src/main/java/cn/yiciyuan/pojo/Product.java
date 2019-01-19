package cn.yiciyuan.pojo;

import java.util.Date;

public class Product {
	// 商品id
	private Integer id;
	// 商品标题
	private String title;
	// 商品卖点
	private String sell_point;
	// 商品价格，单位为：角
	private Integer price;
	// 商品拼团价格，单位为：角
	private Integer group_price;
	// 库存数量
	private Integer num;
	// 商品图片
	private String image;
	// 所属类目
	private Integer cid;
	// 商品状态，1-正常，2-下架，3-删除
	private Byte status;
	// 创建时间
	private Date created;
	// 更新时间
	private Date updated;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSell_point() {
		return sell_point;
	}

	public void setSell_point(String sell_point) {
		this.sell_point = sell_point;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getGroup_price() {
		return group_price;
	}

	public void setGroup_price(Integer group_price) {
		this.group_price = group_price;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Integer getCid() {
		return cid;
	}

	public void setCid(Integer cid) {
		this.cid = cid;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Date getUpdated() {
		return updated;
	}

	public void setUpdated(Date updated) {
		this.updated = updated;
	}

}
