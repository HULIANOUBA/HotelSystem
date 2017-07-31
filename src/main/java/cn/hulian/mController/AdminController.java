package cn.hulian.mController;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.hulian.mDao.IAdminDao;
import cn.hulian.mEntity.Admin;
import net.sf.json.JSONObject;

@Controller
public class AdminController {

	ApplicationContext ctx;
	private Admin admin;
	@RequestMapping(value="queryAdminByName")
	@ResponseBody
	public String queryAdminByName(@RequestBody String data){
		String str="";
		admin=new Admin();
		ctx=new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		JSONObject jObj=JSONObject.fromObject(data);
		String client=jObj.getString("client");
		IAdminDao iAdminDao=ctx.getBean(IAdminDao.class);
		admin=iAdminDao.queryAdminByName(client);
		/*System.out.println(admin);*/
		if(admin==null||admin.equals(""))
			str="f";
		else
			str="s";
		
		return str;
	}
}
