$(function() {

	
	if($('#username').val() == "") {
		window.location.href = "login.jsp";
	} else {
		$("#Client").text("当前用户：" + $('#username').val());
		$("#Client").after("<a id='logoff' href='#'>注销</a>")

		var client = {
			"client": $('#username').val()
		};
		$.ajax({
			type: "post",
			contentType: "application/json",
			data: JSON.stringify(client),
			url: "queryAdminByName.spring",
			success: function(data) {
				if(data == 'f') {
					$('#li_4').hide();
					$('#li_5').hide();
				}
			}
		});
	}
	$('#logoff').on("click", function() {
		$.ajax({
			type: "get",
			url: "logoff.spring",
			success: function(data) {
				if(data == "s")
					window.location.href = "login.jsp";
				else
					alert("系统错误");
			}

		});
	});
	$('#li_1_1').hide();
	$('#li_2_2').hide();
	$('#li_3_3').hide();
	$('#li_4_4').hide();
	$('#li_5_5').hide();
	$('#reservationAddDiv').hide();
	$('#check-inDiv').hide();
	$('#reservationExistDiv').hide();
	$('#customerManageDiv').hide();
	$('#admin_roomQueryDiv').hide();
	$('#admin_roomAddDiv').hide();
	$('#admin_staffQueryDiv').hide();
	$('#admin_staffAddDiv').hide();

	function controlNextAll(nextLi) {
		if(nextLi.next().is(':hidden'))
			nextLi.next().slideDown();
		else
			nextLi.next().slideUp();
	}
	$('#li_1').click(function() {
		controlNextAll($(this));
	});
	$('#li_2').click(function() {
		controlNextAll($(this));
	});
	$('#li_3').click(function() {
		controlNextAll($(this));
	});
	$('#li_4').click(function() {
		controlNextAll($(this));
	});
	$('#li_5').click(function() {
		controlNextAll($(this));
	});

	$('#reservationAdd')
		.click(
			function() {
				var isExist = false;
				$('#top_ul').find('li').each(function() {
					if($(this).attr('id') == 'reservationAddLi') {
						isExist = true;
					}
				});
				if(isExist) {
					showDiv($(this).attr('id'));
				} else {
					$('#top_ul')
						.append(
							"<li id='reservationAddLi'><span id='reservationAdd_span'>" +
							$(this).text() +
							"</span><span id='reservationAddDivClose'>*</span></li>");
					showDiv($(this).attr('id'));
				}
			});

	$('#top_ul').on("click", "#reservationAddDivClose", function() {
		showOtherDiv($(this));
	});
	$('#top_ul').on("click", "#reservationAdd_span", function() {
		showCurrentDiv($(this));
	});

	$('#check-in')
		.click(
			function() {
				var isExist = false;
				$('#top_ul').find('li').each(function() {
					if($(this).attr('id') == 'check-inLi') {
						isExist = true;
					}
				});
				if(isExist) {
					showDiv($(this).attr('id'));
				} else {
					$('#top_ul')
						.append(
							"<li id='check-inLi'><span id='check-in_span'>" +
							$(this).text() +
							"</span><span id='check-inDivClose'>*</span></li>");
					showDiv($(this).attr('id'));
				}

			});
	$('#top_ul').on("click", "#check-inDivClose", function() {
		showOtherDiv($(this));
	});
	$('#top_ul').on("click", "#check-in_span", function() {
		showCurrentDiv($(this));
	});

	$('#reservationExist')
		.click(
			function() {
				var isExist = false;
				$('#top_ul').find('li').each(function() {
					if($(this).attr('id') == 'reservationExistLi') {
						isExist = true;
					}
				});
				if(isExist) {
					showDiv($(this).attr('id'));
				} else {
					$('#top_ul')
						.append(
							"<li id='reservationExistLi'><span id='reservationExist_span'>" +
							$(this).text() +
							"</span><span id='reservationExistDivClose'>*</span></li>");
					showDiv($(this).attr('id'));
					$("#reservation_table tbody")
						.load(
							location.href +
							" #reservation_table tbody");
					getReservation();

				}
			});

	$('#top_ul').on("click", "#reservationExistDivClose", function() {
		showOtherDiv($(this));
	});
	$('#top_ul').on("click", "#reservationExist_span", function() {
		showCurrentDiv($(this));
	});

	$('#customerManage')
		.click(
			function() {
				var isExist = false;
				$('#top_ul').find('li').each(function() {
					if($(this).attr('id') == 'customerManageLi') {
						isExist = true;
					}
				});
				if(isExist) {
					showDiv($(this).attr('id'));
				} else {
					$('#top_ul')
						.append(
							"<li id='customerManageLi'><span id='customerManage_span'>" +
							$(this).text() +
							"</span><span id='customerManageDivClose'>*</span></li>");
					showDiv($(this).attr('id'));
					$("#customer_table tbody").load(
						location.href + " #customer_table tbody");
					getCustomer();

				}
			});

	$('#top_ul').on("click", "#customerManageDivClose", function() {
		showOtherDiv($(this));
	});
	$('#top_ul').on("click", "#customerManage_span", function() {
		showCurrentDiv($(this));
	});

	$('#admin_roomQuery')
		.click(
			function() {
				var isExist = false;
				$('#top_ul').find('li').each(function() {
					if($(this).attr('id') == 'admin_roomQueryLi') {
						isExist = true;
					}
				});
				if(isExist) {
					showDiv($(this).attr('id'));
				} else {
					$('#top_ul')
						.append(
							"<li id='admin_roomQueryLi'><span id='admin_roomQuery_span'>" +
							$(this).text() +
							"</span><span id='admin_roomQueryDivClose'>*</span></li>");
					showDiv($(this).attr('id'));
					$("#roomQuery_table tbody").load(
						location.href + " #roomQuery_table tbody");
					getRoom();

				}
			});

	$('#top_ul').on("click", "#admin_roomQueryDivClose", function() {
		showOtherDiv($(this));
	});
	$('#top_ul').on("click", "#admin_roomQuery_span", function() {
		showCurrentDiv($(this));
	});
	$('#admin_roomAdd')
		.click(
			function() {
				var isExist = false;
				$('#top_ul').find('li').each(function() {
					if($(this).attr('id') == 'admin_roomAddLi') {
						isExist = true;
					}
				});
				if(isExist) {
					showDiv($(this).attr('id'));
				} else {
					$('#top_ul')
						.append(
							"<li id='admin_roomAddLi'><span id='admin_roomAdd_span'>" +
							$(this).text() +
							"</span><span id='admin_roomAddDivClose'>*</span></li>");
					showDiv($(this).attr('id'));
					

				}
			});
	$('#top_ul').on("click", "#admin_roomAddDivClose", function() {
		showOtherDiv($(this));
	});
	$('#top_ul').on("click", "#admin_roomAdd_span", function() {
		showCurrentDiv($(this));
	});
	$('#admin_staffAdd')
		.click(
			function() {
				var isExist = false;
				$('#top_ul').find('li').each(function() {
					if($(this).attr('id') == 'admin_staffAddLi') {
						isExist = true;
					}
				});
				if(isExist) {
					showDiv($(this).attr('id'));
				} else {
					$('#top_ul')
						.append(
							"<li id='admin_staffAddLi'><span id='admin_staffAdd_span'>" +
							$(this).text() +
							"</span><span id='admin_staffAddDivClose'>*</span></li>");
					showDiv($(this).attr('id'));

				}
			});
	$('#top_ul').on("click", "#admin_staffAddDivClose", function() {
		showOtherDiv($(this));
	});
	$('#top_ul').on("click", "#admin_staffAdd_span", function() {
		showCurrentDiv($(this));
	});
$('#admin_staffQuery')
		.click(
			function() {
				var isExist = false;
				$('#top_ul').find('li').each(function() {
					if($(this).attr('id') == 'admin_staffQueryLi') {
						isExist = true;
					}
				});
				if(isExist) {
					showDiv($(this).attr('id'));
				} else {
					$('#top_ul')
						.append(
							"<li id='admin_staffQueryLi'><span id='admin_staffQuery_span'>" +
							$(this).text() +
							"</span><span id='admin_staffQueryDivClose'>*</span></li>");
					showDiv($(this).attr('id'));
					$("#staffQuery_table tbody").load(
						location.href + " #staffQuery_table tbody");
					getStaff();

				}
			});

	$('#top_ul').on("click", "#admin_staffQueryDivClose", function() {
		showOtherDiv($(this));
	});
	$('#top_ul').on("click", "#admin_staffQuery_span", function() {
		showCurrentDiv($(this));
	});
	$('#deleteChoose')
		.click(
			function() {
				var boxJson = {};
				var boxStr = '';
				var length = $('input:checkbox[name=rOperation]:checked').length;
				$('input:checkbox[name=rOperation]:checked').each(
					function(index) {
						if(index != length - 1)
							boxStr += this.value + ",";
						else
							boxStr += this.value;
					});

				boxJson = {
					"boxStr": boxStr
				};
				$
					.ajax({
						type: "post",
						url: "deleteReservation.spring?t=" +
							new Date().getTime(),
						contentType: "application/json",
						data: JSON.stringify(boxJson),
						success: function(data) {
							if(data == "s") {
								/* 局部刷新 */
								$("#reservation_table tbody")
									.load(
										location.href +
										" #reservation_table tbody");
								getReservation();
							} else
								alert("系统错误");
						}
					});

			});
	$('#cDeleteChoose')
		.click(
			function() {
				var boxJson = {};
				var boxStr = '';
				var length = $('input:checkbox[name=cOperation]:checked').length;
				$('input:checkbox[name=cOperation]:checked').each(
					function(index) {
						if(index != length - 1)
							boxStr += this.value + ",";
						else
							boxStr += this.value;
					});

				boxJson = {
					"boxStr": boxStr
				};
				$
					.ajax({
						type: "post",
						url: "deleteCustomer.spring?t=" +
							new Date().getTime(),
						contentType: "application/json",
						data: JSON.stringify(boxJson),
						success: function(data) {
							if(data == "s") {
								/* 局部刷新 */
								$("#customer_table tbody")
									.load(
										location.href +
										" #customer_table tbody");
								getCustomer();
							} else
								alert("系统错误");
						}
					});

			});
	$('#rDeleteChoose')
		.click(
			function() {
				var boxJson = {};
				var boxStr = '';
				var length = $('input:checkbox[name=cOperation]:checked').length;
				$('input:checkbox[name=cOperation]:checked').each(
					function(index) {
						if(index != length - 1)
							boxStr += this.value + ",";
						else
							boxStr += this.value;
					});

				boxJson = {
					"boxStr": boxStr
				};
				$
					.ajax({
						type: "post",
						url: "deleteRoom.spring?t=" +
							new Date().getTime(),
						contentType: "application/json",
						data: JSON.stringify(boxJson),
						success: function(data) {
							if(data == "s") {
								/* 局部刷新 */
								$("#roomManage_table tbody")
									.load(
										location.href +
										" #roomManage_table tbody");
								getRoom();
							} else
								alert("系统错误");
						}
					});

			});
			$('#sDeleteChoose')
		.click(
			function() {
				var boxJson = {};
				var boxStr = '';
				var length = $('input:checkbox[name=sOperation]:checked').length;
				$('input:checkbox[name=sOperation]:checked').each(
					function(index) {
						if(index != length - 1)
							boxStr += this.value + ",";
						else
							boxStr += this.value;
					});

				boxJson = {
					"boxStr": boxStr
				};
				$
					.ajax({
						type: "post",
						url: "deleteUser.spring?t=" +
							new Date().getTime(),
						contentType: "application/json",
						data: JSON.stringify(boxJson),
						success: function(data) {
							if(data == "s") {
								/* 局部刷新 */
								$("#staffQuery_table tbody")
									.load(
										location.href +
										" #staffQuery_table tbody");
								getStaff();
							} else
								alert("系统错误");
						}
					});

			});
			$('#addRoom_form').submit(function(){
				event.preventDefault();
				$.ajax({
					type:"post",
					url:"insertRoom.spring?t="+new Date().getTime(),
					data:$('#addRoom_form').serialize(),
					success:function(data){
						if(data=="s"){
							alert("添加成功");
							$(":input", "#addRoom_form").not(
							":submit,:reset").val("");
						}else if(data=="f") 
						   alert("系统错误");
						else
							alert(data);
					}
				});
			});
			$('#staffAdd_form').submit(function(){
				event.preventDefault();
				$.ajax({
					type:"post",
					url:"insertUser.spring?t="+new Date().getTime(),
					data:$('#staffAdd_form').serialize(),
					success:function(data){
						if(data=="s"){
							alert("添加成功");
							$(":input", "#staffAdd_form").not(
							":submit,:reset").val("");
						}else if(data=="f")
							alert("系统错误");
						else
							alert(data);
						
					}
				});
			});

	function showDiv(name) {
		if(name == "reservationAdd") {
			$('#reservationAddDiv').show();
			$('#check-inDiv').hide();
			$('#reservationExistDiv').hide();
			$('#customerManageDiv').hide();
			$('#admin_roomQueryDiv').hide();
			$('#admin_roomAddDiv').hide();
			$('#admin_staffQueryDiv').hide();
			$('#admin_staffAddDiv').hide();
		}
		if(name == "check-in") {
			$('#check-inDiv').show();
			$('#reservationAddDiv').hide();
			$('#reservationExistDiv').hide();
			$('#customerManageDiv').hide();
			$('#admin_roomQueryDiv').hide();
			$('#admin_roomAddDiv').hide();
			$('#admin_staffQueryDiv').hide();
			$('#admin_staffAddDiv').hide();
		}
		if(name == "reservationExist") {
			$('#reservationExistDiv').show();
			$('#check-inDiv').hide();
			$('#reservationAddDiv').hide();
			$('#customerManageDiv').hide();
			$('#admin_roomQueryDiv').hide();
			$('#admin_roomAddDiv').hide();
			$('#admin_staffQueryDiv').hide();
			$('#admin_staffAddDiv').hide();
		}
		if(name == "customerManage") {
			$('#customerManageDiv').show();
			$('#check-inDiv').hide();
			$('#reservationAddDiv').hide();
			$('#reservationExistDiv').hide();
			$('#admin_roomQueryDiv').hide();
			$('#admin_roomAddDiv').hide();
			$('#admin_staffQueryDiv').hide();
			$('#admin_staffAddDiv').hide();
		}
		if(name == "admin_roomQuery") {
			$('#admin_roomQueryDiv').show();
			$('#check-inDiv').hide();
			$('#reservationAddDiv').hide();
			$('#reservationExistDiv').hide();
			$('#customerManageDiv').hide();
			$('#admin_roomAddDiv').hide();
			$('#admin_staffQueryDiv').hide();
			$('#admin_staffAddDiv').hide();
		}
		if(name == "admin_roomAdd") {
			$('#admin_roomAddDiv').show();
			$('#check-inDiv').hide();
			$('#reservationAddDiv').hide();
			$('#reservationExistDiv').hide();
			$('#customerManageDiv').hide();
			$('#admin_roomQueryDiv').hide();
			$('#admin_staffQueryDiv').hide();
			$('#admin_staffAddDiv').hide();
		}
		if(name == "admin_staffQuery") {
			$('#admin_staffQueryDiv').show();
			$('#admin_roomAddDiv').hide();
			$('#check-inDiv').hide();
			$('#reservationAddDiv').hide();
			$('#reservationExistDiv').hide();
			$('#customerManageDiv').hide();
			$('#admin_roomQueryDiv').hide();
			$('#admin_staffAddDiv').hide();
		}
		if(name == "admin_staffAdd") {
			$('#admin_staffAddDiv').show();
			$('#admin_roomAddDiv').hide();
			$('#check-inDiv').hide();
			$('#reservationAddDiv').hide();
			$('#reservationExistDiv').hide();
			$('#customerManageDiv').hide();
			$('#admin_roomQueryDiv').hide();
			$('#admin_staffQueryDiv').hide();
		}
	}

	function showOtherDiv(obj) {
		var preDivID = obj.parent().prev().children('span:first-child').attr(
			'id');
		var nextDivID = obj.parent().next().children('span:first-child').attr(
			'id');
		obj.parent().remove();
		var mainDiv = obj.attr('id').substring(0, obj.attr('id').length - 5);
		if(preDivID == undefined) {
			if(nextDivID == undefined) {
				$('#' + mainDiv).hide();
			} else {
				var nextDiv = nextDivID.substring(0, nextDivID.length - 5);
				showDiv(nextDiv);
			}
		} else {
			var preDiv = preDivID.substring(0, preDivID.length - 5);
			showDiv(preDiv);
		}
	}

	function showCurrentDiv(obj) {
		var spanID = obj.attr('id');
		var end = spanID.length - 5;
		var currentDiv = spanID.substring(0, end);
		showDiv(currentDiv);
	}

	$('#reservation_form').submit(
		function() {
			event.preventDefault();
			var formData = {};
			var array = $('#reservation_form').serializeArray();
			for(var item in array) {
				formData[array[item].name] = array[item].value;
			}
			var jsonData = {
				"formData": formData
			};
			$.ajax({
				type: "post",
				contentType: "application/json",
				url: "insertReservation.spring?t=" + new Date().getTime(),
				data: JSON.stringify(jsonData),
				success: function(data) {
					if(data == "s") {
						alert("预定成功");
						$(":input", "#reservation_form").not(
							":submit,:reset").val("");
					} else
						alert("系统错误");
				}
			});
		});
	$('#check-in_form').submit(
		function() {
			event.preventDefault();
			var formData = {};
			var array = $('#check-in_form').serializeArray();
			for(var item in array) {
				formData[array[item].name] = array[item].value;
			}
			var jsonData = {
				"formData": formData
			};
			$.ajax({
				type: "post",
				contentType: "application/json",
				url: "insertCustomer.spring?t=" + new Date().getTime(),
				data: JSON.stringify(jsonData),
				success: function(data) {
					if(data == "s") {
						alert("登记成功");
						$(":input", "#check-in_form")
							.not(":submit,:reset").val("");
					} else
						alert("系统错误");
				}
			});
		});
	$('#roomNull')
		.click(
			function() {
				$("#room_table tbody").load(
					location.href + " #room_table tbody");
				$
					.ajax({
						type: "post",
						url: "queryAllRoomByStatus.spring?t=" +
							new Date().getTime(),
						success: function(data) {
							var array = JSON.parse(data);
							$
								.each(
									array,
									function(index, item) {
										var tr = "<tr>";
										tr += "<td>" +
											item.id +
											"</ td>";
										tr += "<td>" +
											item.type +
											"</ td>";
										tr += "<td>" +
											item.no +
											"</ td>";
										tr += "<td class='R_STATUS'>" +
											item.status +
											"</ td>";
										tr += "<td>" +
											item.pay +
											"</ td>";
										tr += "</ tr>";
										$('#room_table')
											.append(tr);
									});
							$("#room_table td[class]")
								.click(
									function() {
										var objTD = $(this);
										var oldText = objTD
											.text();
										var mInput = $("<input type='text'  value='" +
											oldText +
											"'/>");
										objTD.html(mInput);
										/*
										 * mInput.height(objTD.height);
										 * mInput.width(objTD.width);
										 */
										mInput
											.click(function() {
												return false;
											});
										mInput
											.blur(function() {
												var newText = $(
														this)
													.val();
												var re = /^[01]$/;

												if(newText != oldText) {
													if(re
														.test(parseInt(newText))) {
														var firstTdVal = objTD
															.parent()
															.children()
															.get(
																0).textContent;
														var tdClassVal = objTD
															.attr('class');
														mData = {
															"id": firstTdVal,
															"column": tdClassVal,
															"value": newText
														};

														$
															.ajax({
																type: "post",
																contentType: "application/json",
																url: "updateRoomStatus.spring?t=" +
																	new Date()
																	.getTime(),
																data: JSON
																	.stringify(mData),
																success: function(
																	data) {
																	if(data == "s")
																		objTD
																		.html(newText);
																	else
																		alert(data);
																}
															});
													} else
														alert("输入有误");
												} else
													objTD
													.html(oldText);
											});
									});
						}
					});
			});

	var getReservation = function() {
		$.ajax({
			type: "post",
			url: "queryReservation.spring?t=" + new Date().getTime(),
			success: function(data) {
				var jsonArray = JSON.parse(data);
				$.each(jsonArray, function(index, item) {
					var tr = "<tr>";
					tr += "<td class='R_STATUS'>" + item.status + "</ td>";
					tr += "<td class='R_ARRIVE'>" + item.arrive + "</ td>";
					tr += "<td class='R_LEAVE'>" + item.leave + "</ td>";
					tr += "<td class='R_TEL'>" + item.tel + "</ td>";
					tr += "<td class='R_COUNT'>" + item.count + "</ td>";
					tr += "<td class='R_NAME'>" + item.name + "</ td>";
					tr += "<td class='R_COST'>" + item.cost + "</ td>";
					tr += "<td><input type='checkbox' value=" + item.id +
						" name='rOperation'></ td>";
					tr += "</ tr>";
					/* trs += tr; */
					$('#reservation_table').append(tr);
				});
				var tableObj = $("#reservation_table tbody");
				var allRows = tableObj.find('tr').length; /* 获取tbody里的行数 */
				var pageRowObj = $('#pageRow');
				var currentPageObj = $('#currentPage');
				var rowCountObj = $('#rowCount');
				var setPageRowsObj = $('#setPageRow');
				var firstPageObj = $('#firstPage');
				var prePageObj = $('#prePage');
				var nextPageObj = $('#nextPage');
				var lastPageObj = $('#lastPage');
				var skipPageObj = $('#skipPage');
				var pageNo = $('#pageNo');
				alertPage(tableObj, allRows, pageRowObj, currentPageObj,
					rowCountObj, setPageRowsObj, firstPageObj, prePageObj,
					nextPageObj, lastPageObj, skipPageObj, pageNo);
				$("#reservation_table td[class]").click(
					function() {
						requestUrl = "updateReservation.spring?t=" +
							new Date().getTime();
						operateTD($(this), requestUrl);
					});
			}
		});
	}
	var getCustomer = function() {
		$.ajax({
			type: "post",
			url: "queryAllCustomer.spring?t=" + new Date().getTime(),
			success: function(data) {
				var jsonArray = JSON.parse(data);
				$.each(jsonArray, function(index, item) {
					var tr = "<tr>";
					tr += "<td class='C_NAME'>" + item.name + "</ td>";
					tr += "<td class='C_TEL'>" + item.tel + "</ td>";
					tr += "<td class='C_CREDENTIALSID'>" + item.credentialsno +
						"</ td>";
					tr += "<td class='C_ROOMNO'>" + item.roomno + "</ td>";
					tr += "<td><input type='checkbox' value=" + item.id +
						" name='cOperation'></ td>";
					tr += "</ tr>";
					$('#customer_table').append(tr);
				});
				var tableObj = $("#customer_table tbody");
				var allRows = tableObj.find('tr').length;
				var pageRowObj = $('#c_pageRow');
				var currentPageObj = $('#c_currentPage');
				var rowCountObj = $('#c_rowCount');
				var setPageRowsObj = $('#c_setPageRow');
				var firstPageObj = $('#c_firstPage');
				var prePageObj = $('#c_prePage');
				var nextPageObj = $('#c_nextPage');
				var lastPageObj = $('#c_lastPage');
				var skipPageObj = $('#c_skipPage');
				var pageNo = $('#c_pageNo');
				alertPage(tableObj, allRows, pageRowObj, currentPageObj,
					rowCountObj, setPageRowsObj, firstPageObj, prePageObj,
					nextPageObj, lastPageObj, skipPageObj, pageNo);
				$("#customer_table tbody td[class]").click(
					function() {
						requestUrl = "updateCustomer.spring?t=" +
							new Date().getTime();
						operateTD($(this), requestUrl);
					});
			}
		});
	}

	var getRoom = function() {
		$.ajax({
			type: "post",
			url: "queryAllRoom.spring?t=" + new Date().getTime(),
			success: function(data) {
				var jsonArray = JSON.parse(data);
				$.each(jsonArray, function(index, item) {
					var tr = "<tr>";
					tr += "<td class='R_TYPE'>" + item.type + "</ td>";
					tr += "<td class='R_NO'>" + item.no + "</ td>";
					tr += "<td class='R_STATUS'>" + item.status + "</ td>";
					tr += "<td class='R_PAY'>" + item.pay + "</ td>";
					tr += "<td><input type='checkbox' value=" + item.id +
						" name='cOperation'></ td>";
					tr += "</ tr>";
					$('#roomQuery_table').append(tr);
				});
				var tableObj = $("#roomQuery_table tbody");
				var allRows = tableObj.find('tr').length;
				var pageRowObj = $('#r_pageRow');
				var currentPageObj = $('#r_currentPage');
				var rowCountObj = $('#r_rowCount');
				var setPageRowsObj = $('#r_setPageRow');
				var firstPageObj = $('#r_firstPage');
				var prePageObj = $('#r_prePage');
				var nextPageObj = $('#r_nextPage');
				var lastPageObj = $('#r_lastPage');
				var skipPageObj = $('#r_skipPage');
				var pageNo = $('#r_pageNo');
				alertPage(tableObj, allRows, pageRowObj, currentPageObj,
					rowCountObj, setPageRowsObj, firstPageObj, prePageObj,
					nextPageObj, lastPageObj, skipPageObj, pageNo);
				$("#roomQuery_table tbody td[class]").click(function() {
					requestUrl = "updateRoom.spring?t=" + new Date().getTime();
					operateTD($(this), requestUrl);
				});
			}
		});
	}
	var getStaff=function(){
		$.ajax({
			type: "post",
			url: "queryAllUser.spring?t=" + new Date().getTime(),
			success: function(data) {
				var jsonArray = JSON.parse(data);
				$.each(jsonArray, function(index, item) {
					var tr = "<tr>";
					tr += "<td class='U_NAME'>" + item.username+ "</ td>";
					tr += "<td class='U_PASSWORD'>" + item.password + "</ td>";
					tr += "<td><input type='checkbox' value=" + item.id +
						" name='sOperation'></ td>";
					tr += "</ tr>";
					$('#staffQuery_table').append(tr);
				});
		/*		alert(data);*/
				
			    }
			});
	}
	var operateTD = function(obj, requestUrl) {
		var objTD = obj;
		var oldText = objTD.text();
		var mInput = $("<input type='text'  value='" + oldText + "'/>");
		objTD.html(mInput);
		mInput.click(function() {
			return false;
		});
		mInput.blur(function() {
			var newText = $(this).val();
			if(newText != oldText) {
				var idVal = objTD.parent().children('td:last').find('input')
					.val();
				var tdClassVal = objTD.attr('class');
				mData = {
					"id": idVal,
					"column": tdClassVal,
					"value": newText
				};

				$.ajax({
					type: "post",
					contentType: "application/json",
					url: requestUrl,
					data: JSON.stringify(mData),
					success: function(data) {
						if(data == "s")
							objTD.html(newText);
						else
							alert(data);
					}
				});
			} else
				objTD.html(oldText);
		});
	}

	var alertPage = function(tableObj, allRows, pageRowObj, currentPageObj,
		rowCountObj, setPageRowsObj, firstPageObj, prePageObj, nextPageObj,
		lastPageObj, skipPageObj, pageNo) {
		var pageRows = parseInt(pageRowObj.val()); /* 每页显示的行数 */
		var currentPage = 1;
		var allPages = allRows / pageRows; /* 总页数 */
		showCurrentPage(tableObj, currentPage, pageRows, allRows,
			currentPageObj, rowCountObj);

		/* 设置每页显示的tr数 */
		setPageRowsObj.click(function() {
			pageRows = parseInt(pageRowObj.val());
			allPages = allRows / pageRows;
			showCurrentPage(tableObj, 1, pageRows, allRows, currentPageObj,
				rowCountObj);
		});
		/* 显示首页 */
		firstPageObj.click(function() {
			currentPage = 1;
			showCurrentPage(tableObj, currentPage, pageRows, allRows,
				currentPageObj, rowCountObj);
		});
		/* 显示上一页 */
		prePageObj.click(function() {
			if(currentPage > 1) {
				currentPage--;
				showCurrentPage(tableObj, currentPage, pageRows, allRows,
					currentPageObj, rowCountObj);
			} else
				alert("已经是第一页");
		});
		/* 显示下一页 */
		nextPageObj.click(function() {
			if(currentPage < allPages) {
				currentPage++;
				showCurrentPage(tableObj, currentPage, pageRows, allRows,
					currentPageObj, rowCountObj);
			} else
				alert("已经是最后一页");
		});
		/* 显示尾页 */
		lastPageObj.click(function() {
			currentPage = Math.ceil(allRows / pageRows);
			showCurrentPage(tableObj, currentPage, pageRows, allRows,
				currentPageObj, rowCountObj);
		});
		/* 跳转到的页面 */
		skipPageObj.click(function() {
			currentPage = parseInt(pageNo.val());
			showCurrentPage(tableObj, currentPage, pageRows, allRows,
				currentPageObj, rowCountObj);
		});
	}

	var showCurrentPage = function(tableObj, currentPage, pageRows, allRows,
		currentPageObj, rowCountObj) {
		tableObj.find('tr').hide(); /* 先隐藏所有的tr */
		var allPages = Math.ceil(allRows / pageRows);
		var prePage = currentPage - 1; /* 上一页页码 */
		var nextPage = currentPage + 1; /* 下一页页码 */
		var beginRow = prePage * pageRows; /* 从哪个tr开始 */
		var endRow = currentPage * pageRows; /* 到哪个tr结束 */

		if(currentPage > 1) {
			/* 获取所有tr，再根据需要显示相应的tr */
			tableObj.find('tr').each(function(index) {
				if(index >= beginRow && index < endRow) {
					$(this).show();
				}
			});
		} else {
			tableObj.find('tr').each(function(index) {
				if(index >= beginRow && index < endRow) {
					$(this).show();
				}
			});
		}
		currentPageObj.text(currentPage + "/" + allPages);
		rowCountObj.text(allRows);
	}
})