package cn.hulian.mController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import cn.hulian.mDao.IUserDao;
import cn.hulian.mEntity.User;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class UserController {

	ApplicationContext ctx;

	@RequestMapping(value = "queryAllUser")
	@ResponseBody
	public String queryAllUser() {
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		IUserDao iUserDao = ctx.getBean(IUserDao.class);
		List<User> list = new ArrayList<User>();
		list = iUserDao.queryAllUser();
		return JSONArray.fromObject(list).toString();
	}
	@RequestMapping(value="insertUser")
	@ResponseBody
	public String insertUser(@RequestParam("account")String account,@RequestParam("password")String password){
		String str="";
		int i=0;
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		IUserDao iUserDao = ctx.getBean(IUserDao.class);
		User u=new User();
		u=iUserDao.getUserByName(account);
		if(u==null){
			u=new User(account, password);
			i=iUserDao.insertUser(u);
			if(i>0)
				str="s";
			else
				str="f";
		}else{
			str="用户已存在";
		}
		return str;
	}
	@RequestMapping(value = "deleteUser")
	@ResponseBody
	public String deleteUser(@RequestBody String data) {
		String str = "";
		int ii = 0;
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		IUserDao iUserDao = ctx.getBean(IUserDao.class);
		JSONObject mData = JSONObject.fromObject(data);
		String boxStr = mData.getString("boxStr");
		String[] ids = boxStr.split(",");
		for (int i = 0; i < ids.length; i++) {
			ii = iUserDao.deleteUser(Integer.parseInt(ids[i]));
		}
		if (ii > 0)
			str = "s";
		else
			str = "f";

		return str;
	}
}
