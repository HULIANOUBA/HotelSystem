package cn.hulian.mDao;

import java.util.List;
import java.util.Map;

import cn.hulian.mEntity.Customer;

public interface ICustomerDao {

	 int insertCustomer(Customer c);
	 List<Customer> queryAllCustomer();
	 int updateCustomer(Map<String,Object> map);
	 int deleteCustomer(Integer id);
}
