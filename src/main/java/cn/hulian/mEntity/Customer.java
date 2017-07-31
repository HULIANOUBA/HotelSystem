package cn.hulian.mEntity;

public class Customer {

	private Integer id;
	private String name;
	private String tel;
	private String credentialsno;
	private String roomno;
	private String arrive;
	private String leave;
	private Double deposit;
	private Double pay;
	private String ps;
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
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getCredentialsno() {
		return credentialsno;
	}
	public void setCredentialsno(String credentialsno) {
		this.credentialsno = credentialsno;
	}
	public String getRoomno() {
		return roomno;
	}
	public void setRoomno(String roomno) {
		this.roomno = roomno;
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
	public Double getDeposit() {
		return deposit;
	}
	public void setDeposit(Double deposit) {
		this.deposit = deposit;
	}
	public Double getPay() {
		return pay;
	}
	public void setPay(Double pay) {
		this.pay = pay;
	}
	public String getPs() {
		return ps;
	}
	public void setPs(String ps) {
		this.ps = ps;
	}
	public Customer(Integer id, String name, String tel, String credentialsno, String roomno, String arrive,
			String leave, Double deposit, Double pay, String ps) {
		super();
		this.id = id;
		this.name = name;
		this.tel = tel;
		this.credentialsno = credentialsno;
		this.roomno = roomno;
		this.arrive = arrive;
		this.leave = leave;
		this.deposit = deposit;
		this.pay = pay;
		this.ps = ps;
	}
	public Customer(String name, String tel, String credentialsno, String roomno, String arrive, String leave,
			Double deposit, Double pay, String ps) {
		super();
		this.name = name;
		this.tel = tel;
		this.credentialsno = credentialsno;
		this.roomno = roomno;
		this.arrive = arrive;
		this.leave = leave;
		this.deposit = deposit;
		this.pay = pay;
		this.ps = ps;
	}
	public Customer() {
		super();
	}
	
}
