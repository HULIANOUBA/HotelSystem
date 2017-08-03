package cn.hulian.mController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.hulian.mDao.IAdminDao;
import cn.hulian.mEntity.Admin;
import cn.hulian.mTool.MyACT;
import net.sf.json.JSONObject;

@Controller
public class AdminController {

	private Admin admin;
	@RequestMapping(value="queryAdminByName")
	@ResponseBody
	public String queryAdminByName(@RequestBody String data){
		String str="";
		admin=new Admin();
		IAdminDao iAdminDao=MyACT.getApplicationContext().getBean(IAdminDao.class);
		JSONObject jObj=JSONObject.fromObject(data);
		String client=jObj.getString("client");
		
		admin=iAdminDao.queryAdminByName(client);
		/*System.out.println(admin);*/
		if(admin==null||admin.equals(""))
			str="f";
		else
			str="s";
		
		return str;
	}
}
