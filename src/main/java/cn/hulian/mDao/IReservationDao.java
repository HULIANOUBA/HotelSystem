package cn.hulian.mDao;

import java.util.List;
import java.util.Map;

import cn.hulian.mEntity.Reservation;

public interface IReservationDao {

	 int insertReservation(Reservation r);
	 List<Reservation> queryReservation();
	 int updateReservation(Map<String,Object> map);
	 int deleteReservation(int id);
}
