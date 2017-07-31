package cn.hulian.mDao;
import java.util.List;

import cn.hulian.mEntity.User;
public interface IUserDao {

	User getUserByName(String name);
	int insertUser(User u);
	List<User> queryAllUser();
	int deleteUser(int id);
}
