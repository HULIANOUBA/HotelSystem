package cn.hulian.mEntity;

public class Admin {
	private Integer A_ID;
	private String A_NAME;
	public Admin(Integer a_ID, String a_NAME) {
		super();
		A_ID = a_ID;
		A_NAME = a_NAME;
	}
	public Admin() {
		super();
	}
	public Integer getA_ID() {
		return A_ID;
	}
	public void setA_ID(Integer a_ID) {
		A_ID = a_ID;
	}
	public String getA_NAME() {
		return A_NAME;
	}
	public void setA_NAME(String a_NAME) {
		A_NAME = a_NAME;
	}
	

}
