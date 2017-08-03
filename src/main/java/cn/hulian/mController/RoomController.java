package cn.hulian.mController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.hulian.mDao.IRoomDao;
import cn.hulian.mEntity.Room;
import cn.hulian.mTool.MyACT;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class RoomController {


	@RequestMapping(value = "queryAllRoomByStatus")
	@ResponseBody
	public String queryAllRoomByStatus() {
		IRoomDao iRoomDao =MyACT.getApplicationContext().getBean(IRoomDao.class);
		List<Room> list = new ArrayList<Room>();
		list = iRoomDao.queryAllRoomByStatus();
		return JSONArray.fromObject(list).toString();
	}

	@RequestMapping(value = "updateRoomStatus")
	@ResponseBody
	public String updateRoomStatus(@RequestBody String data) {
		String str = "";
		IRoomDao iRoomDao =MyACT.getApplicationContext().getBean(IRoomDao.class);
		JSONObject mData = JSONObject.fromObject(data);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(mData.getString("id")));
		map.put("column", mData.getString("column"));
		map.put("value", Integer.parseInt(mData.getString("value")));
		int i = iRoomDao.updateRoomStatus(map);
		if (i > 0)
			str = "s";
		else
			str = "f";

		return str;
	}

	@RequestMapping(value = "queryAllRoom")
	@ResponseBody
	public String queryAllRoom() {
		IRoomDao iRoomDao =MyACT.getApplicationContext().getBean(IRoomDao.class);
		List<Room> list = new ArrayList<Room>();
		list = iRoomDao.queryAllRoom();
		return JSONArray.fromObject(list).toString();
	}

	@RequestMapping(value = "updateRoom")
	@ResponseBody
	public String updateRoom(@RequestBody String data) {
		String str = "";
		IRoomDao iRoomDao =MyACT.getApplicationContext().getBean(IRoomDao.class);
		JSONObject mData = JSONObject.fromObject(data);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(mData.getString("id")));
		map.put("column", mData.getString("column"));
		map.put("value", Integer.parseInt(mData.getString("value")));
		int i = iRoomDao.updateRoom(map);
		if (i > 0)
			str = "s";
		else
			str = "f";

		return str;
	}

	@RequestMapping(value = "deleteRoom")
	@ResponseBody
	public String deleteRoom(@RequestBody String data) {
		String str = "";
		int ii = 0;
		IRoomDao iRoomDao =MyACT.getApplicationContext().getBean(IRoomDao.class);
		JSONObject mData = JSONObject.fromObject(data);
		String boxStr = mData.getString("boxStr");
		String[] ids = boxStr.split(",");
		for (int i = 0; i < ids.length; i++) {
			ii = iRoomDao.deleteRoom(Integer.parseInt(ids[i]));
		}
		if (ii > 0)
			str = "s";
		else
			str = "f";

		return str;
	}

	@RequestMapping(value="insertRoom")
	@ResponseBody
	public String insertRoom(@RequestParam("r_type")String r_type,@RequestParam("r_no")String r_no,@RequestParam("r_pay")String r_pay){
		String str="";
		int i=0;
		IRoomDao iRoomDao =MyACT.getApplicationContext().getBean(IRoomDao.class);
		Room r=new Room();
		r=iRoomDao.queryRoomByNo(r_no);
		if(r==null){
			r=new Room(r_no, r_type, Double.parseDouble(r_pay));
			i=iRoomDao.insertRoom(r);
			if(i>0)
				str="s";
			else
				str="f";
		}else
			str="房间号已存在";
		
		return str;
	}
}
