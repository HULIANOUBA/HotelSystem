package cn.hulian.mEntity;

public class Reservation {

	private Integer id;
	private String type;
	private String arrive;
	private String leave;
	private String status;
	private String name;
	private String sex;
	private String credentialsType;
	private String credentialsNo;
	private String tel;
	private String email;
	private Integer count;
	private Double cost;
	private String payType;
	private Double earnest;
	private String ps;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getArrive() {
		return arrive;
	}

	public void setArrive(String arrive) {
		this.arrive = arrive;
	}

	public String getLeave() {
		return leave;
	}

	public void setLeave(String leave) {
		this.leave = leave;
	}

	public String getstatus() {
		return status;
	}

	public void setstatus(String status) {
		this.status = status;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getCredentialsType() {
		return credentialsType;
	}

	public void setCredentialsType(String credentialsType) {
		this.credentialsType = credentialsType;
	}

	public String getCredentialsNo() {
		return credentialsNo;
	}

	public void setCredentialsNo(String credentialsNo) {
		this.credentialsNo = credentialsNo;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getcount() {
		return count;
	}

	public void setcount(Integer count) {
		this.count = count;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public String getPayType() {
		return payType;
	}

	public void setPayType(String payType) {
		this.payType = payType;
	}

	public Double getEarnest() {
		return earnest;
	}

	public void setEarnest(Double earnest) {
		this.earnest = earnest;
	}

	public String getPs() {
		return ps;
	}

	public void setPs(String ps) {
		this.ps = ps;
	}

	public Reservation() {
		super();
	}

	public Reservation(Integer id, String type, String arrive, String leave, String status, String name, String sex,
			String credentialsType, String credentialsNo, String tel, String email, Integer count, Double cost,
			String payType, Double earnest, String ps) {
		super();
		this.id = id;
		this.type = type;
		this.arrive = arrive;
		this.leave = leave;
		this.status = status;
		this.name = name;
		this.sex = sex;
		this.credentialsType = credentialsType;
		this.credentialsNo = credentialsNo;
		this.tel = tel;
		this.email = email;
		this.count = count;
		this.cost = cost;
		this.payType = payType;
		this.earnest = earnest;
		this.ps = ps;
	}

	public Reservation(String type, String arrive, String leave, String status, String name, String sex,
			String credentialsType, String credentialsNo, String tel, String email, Integer count, Double cost,
			String payType, Double earnest, String ps) {
		super();
		this.type = type;
		this.arrive = arrive;
		this.leave = leave;
		this.status = status;
		this.name = name;
		this.sex = sex;
		this.credentialsType = credentialsType;
		this.credentialsNo = credentialsNo;
		this.tel = tel;
		this.email = email;
		this.count = count;
		this.cost = cost;
		this.payType = payType;
		this.earnest = earnest;
		this.ps = ps;
	}

}
