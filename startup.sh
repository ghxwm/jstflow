#启动静态文件服务器,端口为8888
(static html -p 8888 &) > /dev/null
#启动应用服务器，此服务器返回的数据将被代理重写,默认端口号为8080
(static html &) > /dev/null
#启动代理服务器,端口为5000
node proxy/proxy.js
