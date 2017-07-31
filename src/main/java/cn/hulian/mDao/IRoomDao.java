package cn.hulian.mDao;

import java.util.List;
import java.util.Map;

import cn.hulian.mEntity.Room;

public interface IRoomDao {

	 List<Room> queryAllRoomByStatus();
	 int updateRoomStatus(Map<String,Object> map );
	 List<Room> queryAllRoom();
	 int updateRoom(Map<String,Object> map );
	 int deleteRoom(Integer id);
	 int insertRoom(Room r);
	 Room queryRoomByNo(String no);
}
