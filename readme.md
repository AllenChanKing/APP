#readme
##配置了tomcat VM
```
-Xms512m
-Xmx512m
-Xmn164m
-XX:MaxPermSize=250m
-XX:ReservedCodeCacheSize=64m
-Xverify:none
-Xnoclassgc
-XX:+UseParNewGC
-XX:+UseConcMarkSweepGC
-XX:CMSInitiatingOccupancyFraction=85
-ea
```