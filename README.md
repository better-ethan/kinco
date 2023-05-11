# kinco
kinco iot platform open api

### Usage Example 
```javascript

const Kinco = require('kinco');

const apiKey = "Your api key from kinco platform";

const kincoApi = new Kinco(apiKey));

//获取设备运行状态
const state = await kincoApi.getMachineState({
    mach_no: 'your machine no',
    page_no: 0,
    page_size: 10,
});

//获取设备历史数据
const data = await kincoApi.getMachineData({
    mach_no: 'your machine no',
    data_start: new Date('2023-01-01').getTime(),
    data_end: new Date().getTime(),
    page_no: 0,
    page_size: 10,
});

//获取设备报警数据
const errors = await kincoApi.getMachineErrors({
    mach_no: 'your machine no',
    data_start: new Date('2023-01-01').getTime(),
    data_end: new Date().getTime(),
    page_no: 0,
    page_size: 10,
});

//设备配置参数下发
const response = await kincoApi.setMachine({
    mach_no: 'your machine no',
    mach_ixs: {
        'lock': 1, // 参数键值对
    }
});
```