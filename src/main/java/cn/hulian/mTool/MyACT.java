package cn.hulian.mTool;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class MyACT implements ApplicationContextAware {

	private static ApplicationContext mApplicationContext;
/*	private static MyACT mACT;

	public synchronized static MyACT init() {
		if (mACT == null) {
			mACT = new MyACT();
		}
		return mACT;
	}*/

	@Override
	public void setApplicationContext(ApplicationContext mApplicationContext) throws BeansException {
		// TODO Auto-generated method stub
		this.mApplicationContext = mApplicationContext;
	};
	public static ApplicationContext getApplicationContext(){
		return mApplicationContext;
	}

/*	public static Object getBean(Class<?> type) {
		return getApplicationContext().getBean(type);
	}*/

}
