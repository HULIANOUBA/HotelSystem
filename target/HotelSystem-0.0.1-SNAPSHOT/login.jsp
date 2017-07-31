<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript" src="js/jquery.min.js"></script>
<title>Insert title here</title>
</head>
<body>
<form action="loginVerify.spring" method="post">  
    <ul>  
                <li><label>用户名</label><input name="username" type="text" /></li>  
                <li/>  
                <li><label>密　码</label><input name="password" type="password" /></li>   
                <li/>  
                <li>  
                    <input type="submit" value="登录"/>  
                </li>  
    </ul>  
</form>  
</body>
</html>