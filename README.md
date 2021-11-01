# campusAutoAuth
## ECNU 华东师范大学校园网开机自动登陆认证

1. 需要node环境，[下载Node.js](https://nodejs.org/zh-cn/)
2. npm安装axios （npm i -g axios)
3. 在index.js中将username, password的值替换为自己的ECNU学号和密码
4. 将autoLogin.bat文件里的"node D:\campusAutoAuth\index.js"路径替换为你放置index.js的位置
5. Win + R ，输入taskschd.msc打开任务管理程序
  - 希望开机自动认证校园网，“创建基本任务”->“计算机启动时”->“启动程序”->选择autoLogin.bat脚本->“完成”
  - 从休眠恢复时自动认证校园网，“创建基本任务”->“当特定任务被记录时”->“日志：系统；源：Power-Troubleshooter；事件 ID：1”->“启动程序”->选择autoLogin.bat脚本->“完成”
