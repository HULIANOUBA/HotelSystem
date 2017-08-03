package cn.hulian.mController;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;
import cn.hulian.mDao.IUserDao;
import cn.hulian.mEntity.User;
import cn.hulian.mTool.MyACT;


@Controller
public class LoginController {

	private User user;
	ModelAndView view = null;  
	@Autowired
	private HttpServletRequest request;
	
	@RequestMapping(value = "loginVerify", method = RequestMethod.POST)
	public ModelAndView loginVerify(@RequestParam("username") String username,
			@RequestParam("password") String password,HttpSession session) {
		ModelAndView view = null;  
		IUserDao iUserDao=MyACT.getApplicationContext().getBean(IUserDao.class);
		user=new User();
	    user=iUserDao.getUserByName(username);
	    if(user==null){
	    	view = new ModelAndView(new RedirectView("login.jsp"));
	    	session.setAttribute("msg", "�û�������");
	    	System.out.println("�û�������");
	    	return view;
	    }else{
	    if(password.equals(user.getPassword())){
	    	session.setAttribute("username", user.getUsername());
	    	view=new ModelAndView(new RedirectView("index.jsp"));
	    	/*view.addObject("username", user.getUsername());*/
	    }else{
	    	 view = new ModelAndView(new RedirectView("login.jsp"));  
	    	 session.setAttribute("msg", "���벻��ȷ");  
	    	 System.out.println("���벻��ȷ");
	    }
	    }
		return view;
	}
	
	@RequestMapping(value = "logoff")
	@ResponseBody
	public String logoff() throws IOException{
		HttpSession session=request.getSession(false);
		String str="";
		session.removeAttribute("username");
		if(session.getAttribute("username")==null||session.getAttribute("username").equals(""))
			str="s";
		else
			str="f";
		return str;
	}

}
