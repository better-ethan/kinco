const fetch = require('node-fetch');
const { URL } = require('node:url');
const BASIC_URL = 'https://da.m-iot.net/api/das';

class Kinco {
    constructor(apiKey) {
        this.apiKey = apiKey;
        const basicUrl = new URL(BASIC_URL);
        basicUrl.searchParams.set('key', this.apiKey);
        this.basicUrlWithKey = basicUrl;
    }

    static instance() {

    }

    /**
     * 获取设备运行状态
     * @param {*} options request body
     * @param {string} options.mach_no 设备编号
     * @param {number} options.page_no 页码
     * @param {number} options.page_size 行数
     * @returns {json} response body
     */
    async getMachineState(options) {
        this.basicUrlWithKey.searchParams.set('api', 'get_mach_state');
        const url = this.basicUrlWithKey.toString();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
        });

        if (!isJsonString(response)) {
            throw new Error('Response is a not JSON string');
        }

        return await response.json();
    }

    /**
     * 获取设备历史数据
     * @param {*} options request body
     * @param {string} options.mach_no 设备编号
     * @param {array} options.mach_ixs ["voltage", "current", ...] 设备参数清单，可选，option
     * @param {number} options.data_start 开始时间戳
     * @param {number} options.data_end 截止时间戳
     * @param {number} options.page_no 页码
     * @param {number} options.page_size 行数
     * @returns {json} response body
     */
    async getMachineData(options) {
        this.basicUrlWithKey.searchParams.set('api', 'get_mach_data');
        const url = this.basicUrlWithKey.toString();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
        });

        if (!isJsonString(response)) {
            throw new Error('Response is a not JSON string');
        }

        return await response.json();
    }

    /**
     * 获取设备报警数据
     * @param {*} options request body
     * @param {string} options.mach_no 设备编号
     * @param {number} options.data_start 开始时间戳
     * @param {number} options.data_end 截止时间戳
     * @param {number} options.page_no 页码
     * @param {number} options.page_size 行数
     * @returns {json} response body
     */
    async getMachineErrors(options) {
        this.basicUrlWithKey.searchParams.set('api', 'get_mach_errs');
        const url = this.basicUrlWithKey.toString();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
        });

        if (!isJsonString(response)) {
            throw new Error('Response is a not JSON string');
        }
        
        return await response.json();
    }

    /**
     * 配置设备参数
     * @param {*} options request body
     * @param {string} options.mach_no 设备编号
     * @param {json} options.mach_kv 参数键值对
     * @returns {json} response body
     */
    async setMachine(options) {
        this.basicUrlWithKey.searchParams.set('api', 'set_mach_ixs');
        const url = this.basicUrlWithKey.toString();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
        });

        if (!isJsonString(response)) {
            throw new Error('Response is a not JSON string');
        }

        return await response.json();
    }

    /**
     * 下发设备应用数据包
     * @param {*} options request body
     * @param {string} options.mach_no 设备编号
     * @param {json} options.mach_app 参数键值对
     * @returns {json} response body
     */
    async setMachineApp(options) {
        this.basicUrlWithKey.searchParams.set('api', 'set_mach_app');
        const url = this.basicUrlWithKey.toString();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
        });

        if (!isJsonString(response)) {
            throw new Error('Response is a not JSON string');
        }

        return await response.json();
    }


}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports = Kinco;
