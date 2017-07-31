<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/index.css" />
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
	    <script type="text/javascript" src="js/index.js"></script>
		<title>Insert title here</title>
	</head>

	<body>
		<div id="header">
			<div class="container">
				<div class="row">
					<div id="header_left">
						<h1>大酒店系统</h1>
					</div>
					<div id="header_right">
						<input type="hidden" value="${sessionScope.username}" id="username">
						<span id='Client'></span>
					</div>
				</div>
			</div>
		</div>
		<div id="main">
			<div class="container">
				<div class="col-md-3" id="main_left">
					<ul id="ul_1">
						<li id="li_1">
							<a href="#0">主菜单</a>
						</li>
						<li id="li_1_1">
							<ul id="ul_2">
								<li id="li_2">
									<a href="#0">酒店管理系统</a>
								</li>
								<li id="li_2_2">
									<ul id="ul_3">
										<li id="li_3">
											<a href="#0">预定管理</a>
										</li>
										<li id="li_3_3">
											<ul>
												<li>
													<a href="#0" id="reservationAdd">新增预定</a>
												</li>
												<li>
													<a href="#0" id="reservationExist">已有预定</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="#0" id="check-in">入住登记</a>
										</li>
										<li>
											<a href="#0" id="customerManage">客户管理</a>
										</li>
										<li>
											<a href="#0">业务统计</a>
										</li>
										<li id='li_4'>
											<a href="#0">房间管理</a>
										</li>
										<li id='li_4_4'>
											<ul>
												<li>
													<a href='#' id='admin_roomQuery'>房间查询</a>
												</li>
												<li>
													<a href='#' id='admin_roomAdd'>房间新增</a>
												</li>
											</ul>
										</li>
										<li id='li_5'>
											<a href="#0">人员管理</a>
										</li>
										<li id="li_5_5">
											<ul>
												<li>
													<a href='#' id='admin_staffQuery'>人员查询</a>
												</li>
												<li>
													<a href='#' id='admin_staffAdd'>人员新增</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="col-md-9" id="main_right">
					<div id="main_right_top">
						<ul id="top_ul"></ul>
					</div>
					<div id="main_right_middle">
						<div id="reservationAddDiv">
							<form id="reservation_form">
								<table>
									<tr>
										<td class="col-md-4"><label>预约方式 </label><input type="text" list="reservation_type_list" name="reservation_type" required /> <datalist id="reservation_type_list">
										<option>电话预约</option>
										<option>网上预约</option>
										<option>当面预约</option>
										</datalist></td>
										<td class="col-md-4"><label>预约日期 </label><input type="date" name="reservation_time" required /></td>
										<td class="col-md-4"><label>离开日期 </label><input type="date" name="leave_time" required /></td>
									</tr>
									<tr>
										<td class="col-md-4"><label>姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" name="name" required pattern="^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$j" /></td>
										<td class="col-md-4"><label>性别&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" name="sex" list="sex_list" required /> <datalist id="sex_list">
										<option>男</option>
										<option>女</option>
										</datalist></td>
										<td class="col-md-4"><label>预定状态 </label><input type="text" name="reservation_status" list="reservation_status_list" /> <datalist id="reservation_status_list">
										<option>标准间</option>
										<option>大床间</option>
										<option>套房</option>
										<option>豪华套房</option>
										</datalist></td>
									</tr>
									<tr>
										<td class="col-md-4"><label>数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="number" name="count" /></td>
										<td class="col-md-4"><label>证件类型 </label><input type="text" name="credentials_type" list="credentials_type_list" required /> <datalist id="credentials_type_list">
										<option>身份证</option>
										<option>户口本</option>
										<option>居住证</option>
										<option>签证</option>
										<option>其它</option>
										</datalist></td>
										<td class="col-md-4"><label>证件号&nbsp;&nbsp;&nbsp;</label><input type="text" name="credentials_no" required pattern="^\d{15}|\d{18}$j" /></td>
									</tr>
									<tr>

										<td class="col-md-4"><label>联系电话</label><input type="tel" name="phone" required pattern="^\d{11}$j" /></td>
										<td class="col-md-4"><label>电子邮箱 </label><input type="email" name="e-mail" /></td>
										<td class="col-md-4"><label>预定金&nbsp;&nbsp;&nbsp;</label><input type="text" name="earnest" value="0" required pattern="^[0-9]+(.[0-9]+)?$j" /></td>
									</tr>
									<tr>
										<td class="col-md-4"><label>总费用&nbsp;&nbsp;&nbsp;</label><input type="text" name="cost" value="0" required pattern="^[0-9]+(.[0-9]+)?$j" /></td>
										<td class="col-md-4"><label>付款方式 </label><input type="text" name="pay_type" list="pay_type_list" /> <datalist id="pay_type_list">
										<option>现金</option>
										<option>网上支付</option>
										<option>刷卡</option>
										</datalist></td>

										<td class="col-md-4"><label>备注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" name="remark" /></td>
									</tr>
								</table>
								<p>
									<input type="submit" id="reservation_btn" value="预定" /> <input type="reset" id="reservation_cancel" value="取消" />
								</p>
							</form>
						</div>
						<div id="check-inDiv">
							<form id="check-in_form">
								<div id="check-in_table_div">
									<table id='check-in_table'>
										<tr class='form-group'>
											<td><label>客户姓名</label><input  type="text" name="customer_name" required pattern="^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$j" /></td>
											<td><label>联系电话</label><input  type="tel" name="customer_phone" required pattern="^\d{11}$j" />
											</td>
											<td><label>身份证&nbsp;&nbsp;&nbsp;</label><input class='form-control' type="text" name="customerID_no" required pattern="^[0-9]+(.[0-9]+)?$j" /></td>
										</tr>
										<tr class='form-group'>
											<td><label>入住房号</label><input  type="text" name="room_no" required /></td>
											<td><label>入住时间</label><input  type="date" name="check-in_time" required /></td>
											<td><label>退房时间</label><input  type="date" name="check-out_time" required /></td>
										</tr>
										<tr class='form-group'>
											<td><label>押金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input  type="text" name="deposit" required /></td>
											<td><label>应付金额</label><input  type="text" name="pay" required /></td>
											<td><label>备注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input  type="text" name="ps" /></td>
										</tr>
									</table>
								</div>
								<div id="room_table_div">
									<table id='room_table'>
										<thead>
											<tr>
												<th>序号</th>
												<th>房间类型</th>
												<th>房间号</th>
												<th>房间状态</th>
												<th>房间价格</th>
											</tr>
										</thead>
									</table>
								</div>
								<p id="check-in_btn_p">
									<input type="button" id='roomNull' value='空房查询' /> <input type="submit" id="check-in_btn" value="入住" /><input type="reset" id="check-in_cancel" value="取消" />
								</p>
							</form>
						</div>
						<div id="reservationExistDiv">
							<div id="alertPageDiv">
								<label>当前</label><span id='currentPage'>1/1</span><span>每页<input
								type="text" id='pageRow' value='2' />条
							</span>
								<a id='setPageRow' href='#'>设置</a> <label>数据总量</label> <span id='rowCount'>1</span>
								<a id="firstPage" href='#'>首页</a>
								<a id='prePage' href='#'>上一页</a>
								<a id='nextPage' href='#'>下一页</a>
								<a id='lastPage' href='#'>尾页</a> <label>转到</label><input type="text" id='pageNo' /><label>页</label>
								<a id='skipPage' href='#'>跳转</a>
							</div>
							<div id="reservation_table_div">
								<table id="reservation_table">
									<thead>
										<tr>
											<th>状态</th>
											<th>到店</th>
											<th>离店</th>
											<th>电话</th>
											<th>数量</th>
											<th>姓名</th>
											<th>金额</th>
											<th>选择</th>
										</tr>
									</thead>
								</table>
							</div>
							<input type="button" id="deleteChoose" value="删除" />
						</div>
						<div id='customerManageDiv'>
							<div id="c_alertPageDiv">
								<label>当前</label><span id='c_currentPage'>1/1</span><span>每页<input
								type="text" id='c_pageRow' value='2' />条
							</span>
								<a id='c_setPageRow' href='#'>设置</a> <label>数据总量</label> <span id='c_rowCount'>1</span>
								<a id="c_firstPage" href='#'>首页</a>
								<a id='c_prePage' href='#'>上一页</a>
								<a id='c_nextPage' href='#'>下一页</a>
								<a id='c_lastPage' href='#'>尾页</a> <label>转到</label><input type="text" id='c_pageNo' /><label>页</label>
								<a id='c_skipPage' href='#'>跳转</a>
							</div>
							<div id='customer_table_div'>
								<table id="customer_table">
									<thead>
										<th>姓名</th>
										<th>电话</th>
										<th>身份证</th>
										<th>房间号</th>
										<th>选择</th>
									</thead>
								</table>
							</div>
							<input type="button" id="cDeleteChoose" value="删除" />
						</div>
						<div id="admin_roomQueryDiv">
							<div id="r_alertPageDiv">
								<label>当前</label><span id='r_currentPage'>1/1</span><span>每页<input
								type="text" id='r_pageRow' value='2' />条
							</span>
								<a id='r_setPageRow' href='#'>设置</a> <label>数据总量</label> <span id='r_rowCount'>1</span>
								<a id="r_firstPage" href='#'>首页</a>
								<a id='r_prePage' href='#'>上一页</a>
								<a id='r_nextPage' href='#'>下一页</a>
								<a id='r_lastPage' href='#'>尾页</a> <label>转到</label><input type="text" id='r_pageNo' /><label>页</label>
								<a id='r_skipPage' href='#'>跳转</a>
							</div>
							<div id="roomQuery_table_div">
								<table id='roomQuery_table'>
									<thead>
										<tr>
											<th>房间类型</th>
											<th>房间号</th>
											<th>房间状态</th>
											<th>房间价格</th>
											<th>选择</th>
										</tr>
									</thead>
								</table>
							</div>
							<input type="button" id="rDeleteChoose" value="删除" />
						</div>
					    <div id="admin_roomAddDiv">
					    <form id="addRoom_form">
					         <div class="form-group col-md-4">
					         <label>房间类型</label>
					         <input type="text" class="form-controll" name="r_type" />
					         </div>
					          <div class="form-group col-md-4">
					         <label>房间号</label>
					         <input type="text" class="form-controll" name="r_no" />
					         </div>
					          <div class="form-group col-md-4">
					         <label>房间价格</label>
					         <input type="text" class="form-controll" name="r_pay" />
					         </div>
					         
					         <input type="submit" value="添加" id="addRoom" />
					         <input type="reset" value="取消" id="addRoom_cancel" />
					         
					    </form>
					</div>
				        <div id="admin_staffQueryDiv">
				        <div id="staffQuery_table_div">
				        <table id="staffQuery_table">
				             <thead>
				             <th>账户</th>
				             <th>密码</th>
				             <th>选择</th>
				             </thead>
				        </table>
			
				        </div>
				        <input type="button" id="sDeleteChoose" value="删除" />
				        </div>
				        <div id="admin_staffAddDiv">
				        <form id="staffAdd_form">
				        <div class="form-group">
				        <label>账户</label>
				        <input type="text" name="account" class="form-controll" />
				        </div>
				        <div class="form-group">
				         <label>密码</label>
				        <input type="text" name="password" class="form-controll" />
				        </div>
				        <input type="submit" value="添加" id="staffAdd"/>
				        <input type="reset" value="取消" id="staffAdd_cancel"/>
				        </form>
				        </div>
					</div>
			   </div>
		</div>
	</body>

</html>