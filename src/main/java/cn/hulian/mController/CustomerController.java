package cn.hulian.mController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.hulian.mDao.ICustomerDao;
import cn.hulian.mEntity.Customer;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class CustomerController {

	ApplicationContext ctx;

	@RequestMapping(value = "insertCustomer")
	@ResponseBody
	public String insertCustomer(@RequestBody String cData) {
		String str = "";
		
		int i = 0;
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		ICustomerDao iCustomerDao = ctx.getBean(ICustomerDao.class);
		JSONObject data = JSONObject.fromObject(cData);
		JSONObject mData=data.getJSONObject("formData");
		Customer c = new Customer(mData.getString("customer_name"), mData.getString("customer_phone"),
				mData.getString("customerID_no"), mData.getString("room_no"), mData.getString("check-in_time"),
				mData.getString("check-out_time"), Double.parseDouble(mData.getString("deposit")),
				Double.parseDouble(mData.getString("pay")), mData.getString("ps"));
		i = iCustomerDao.insertCustomer(c);
		if (i > 0)
			str = "s";
		else
			str = "f";

		return str;

	}
	@RequestMapping(value = "queryAllCustomer")
	@ResponseBody
	public String queryAllCustomer(){
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		ICustomerDao iCustomerDao = ctx.getBean(ICustomerDao.class);
		List<Customer> list=new ArrayList<Customer>();
		list=iCustomerDao.queryAllCustomer();
		return JSONArray.fromObject(list).toString();
	}
	@RequestMapping(value = "updateCustomer")
	@ResponseBody
	public String updateCustomer(@RequestBody String data) {
		String str = "";
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		ICustomerDao iCustomerDao = ctx.getBean(ICustomerDao.class);
		JSONObject mData = JSONObject.fromObject(data);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(mData.getString("id")));
		map.put("column", mData.getString("column"));
		map.put("value", mData.getString("value"));
		int i = iCustomerDao.updateCustomer(map);
		if (i > 0)
			str = "s";
		else
			str = "f";

		return str;
	}
	@RequestMapping(value = "deleteCustomer")
	@ResponseBody
	public String deleteCustomer(@RequestBody String data) {
		String str = "";
		int ii = 0;
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		ICustomerDao iCustomerDao = ctx.getBean(ICustomerDao.class);
		JSONObject mData = JSONObject.fromObject(data);
		String boxStr = mData.getString("boxStr");
		String[] ids = boxStr.split(",");
		for (int i = 0; i < ids.length; i++) {
			ii = iCustomerDao.deleteCustomer(Integer.parseInt(ids[i]));
		}
		if (ii > 0)
			str = "s";
		else
			str = "f";

		return str;
	}
}
