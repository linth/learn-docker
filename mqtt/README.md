# MQTT


## option 1
### eclipse-mosquitto
```cmd
$ docker pull eclipse-mosquitto
```

### check the status of mosquitto
```shell
$ systemctl status mosquitto
```

start the service
```shell
$ sudo systemctl start mosquitto
```

stop the service
```shell 
$ sudo systemctl stop mosquitto
```

restart the service
```shell
$ sudo systemctl restart mosquitto
```

### check the firewall 
```shell
$ sudo ufw allow 1883
```

show all commands for ufw
```shell
$ ufw -a
```

### set up the password for mosquitto
```shell
$ sudo mosquitto_passwd -c /etc/mosquitto/passwd myuser
```

### restart the service
```shell
$ sudo systemctl restart mosquitto
```


### use MQTT client tools to test the service
- [MQTTBox](https://chrome.google.com/webstore/detail/mqttbox/kaajoficamnjijhkeomgfljpicifbkaf?hl=zh-TW)
- [MQTT fx](https://softblade.de/en/download-2/)
