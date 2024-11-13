
# command command
```shell
kafka-topics --bootstrap-server localhost:2181 --create  --replication-factor 1 --partitions 1 --topic my-topic

kafka-console-producer --bootstrap-server localhost:2181 --topic my-topic

kafka-console-consumer --bootstrap-server localhost:9092 --topic my-topic --from-beginning

kafka-topics --bootstrap-server localhost:2181 --list 


```

