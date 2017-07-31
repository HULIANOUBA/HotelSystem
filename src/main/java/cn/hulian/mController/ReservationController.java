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

import cn.hulian.mDao.IReservationDao;
import cn.hulian.mEntity.Reservation;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class ReservationController {

	ApplicationContext ctx;

	@RequestMapping(value = "insertReservation")
	@ResponseBody
	public String insertReservation(@RequestBody String rData) {
		String str = "";
		JSONObject mData = JSONObject.fromObject(rData);
		JSONObject jObj = mData.getJSONObject("formData");
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		IReservationDao iReservationDao = ctx.getBean(IReservationDao.class);
		Reservation r = new Reservation(jObj.getString("reservation_type"), jObj.getString("reservation_time"),
				jObj.getString("leave_time"), jObj.getString("reservation_status"), jObj.getString("name"),
				jObj.getString("sex"), jObj.getString("credentials_type"), jObj.getString("credentials_no"),
				jObj.getString("phone"), jObj.getString("e-mail"), Integer.parseInt(jObj.getString("count")),
				Double.parseDouble(jObj.getString("cost")), jObj.getString("pay_type"),
				Double.parseDouble(jObj.getString("earnest")), jObj.getString("remark"));
		int i = iReservationDao.insertReservation(r);
		if (i > 0)
			str = "s";
		else
			str = "f";
		return str;
	}

	@RequestMapping(value = "queryReservation")
	@ResponseBody
	public String queryReservation() {

		List<Reservation> list = new ArrayList<Reservation>();
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		IReservationDao iReservationDao = ctx.getBean(IReservationDao.class);
		list = iReservationDao.queryReservation();
		return JSONArray.fromObject(list).toString();
	}

	@RequestMapping(value = "updateReservation")
	@ResponseBody
	public String updateReservation(@RequestBody String data) {
		String str = "";
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		IReservationDao iReservationDao = ctx.getBean(IReservationDao.class);
		JSONObject mData = JSONObject.fromObject(data);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(mData.getString("id")));
		map.put("column", mData.getString("column"));
		map.put("value", mData.getString("value"));
		int i = iReservationDao.updateReservation(map);
		if (i > 0)
			str = "s";
		else
			str = "f";

		return str;
	}

	@RequestMapping(value = "deleteReservation")
	@ResponseBody
	public String deleteReservation(@RequestBody String data) {
		String str = "";
		int ii = 0;
		ctx = new ClassPathXmlApplicationContext("spring/ApplicationContext.xml");
		IReservationDao iReservationDao = ctx.getBean(IReservationDao.class);
		JSONObject mData = JSONObject.fromObject(data);
		String boxStr = mData.getString("boxStr");
		String[] ids = boxStr.split(",");
		for (int i = 0; i < ids.length; i++) {
			ii = iReservationDao.deleteReservation(Integer.parseInt(ids[i]));
		}
		if (ii > 0)
			str = "s";
		else
			str = "f";
		return str;
	}
}
