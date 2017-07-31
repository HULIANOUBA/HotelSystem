package cn.hulian.mEntity;

public class Room {

	private Integer id;
	private String no;
	private String type;
	private Integer status;
	private Double pay;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNo() {
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Double getPay() {
		return pay;
	}
	public void setPay(Double pay) {
		this.pay = pay;
	}
	public Room(Integer id, String no, String type, Integer status, Double pay) {
		super();
		this.id = id;
		this.no = no;
		this.type = type;
		this.status = status;
		this.pay = pay;
	}
	public Room() {
		super();
	}
	public Room(String no, String type, Double pay) {
		super();
		this.no = no;
		this.type = type;
		this.pay = pay;
	}
	
}
