
const url = 'ws://82.157.123.54:9010/ajaxchattest';

export default class WebSocketClient {

  ws; // websocket
  timer;
  timeout;

  // 定时计数
  timerCount = 0;

  // 发送ping的计数
  pingCount = 0;

  // 发送心跳的间隔时间
  pingInterval = 1;

  // 指定ping最大次数，若超过最大次数，则认为断开.
  maxPingCount = 5;

  constructor() {
  }

  /**
   * 获取WebSocket单例
   * @returns {WebSocketClient}
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new WebSocketClient();
    }
    return this.instance;
  }

  /**
   * 初始化WebSocket
   */
  initWebSocket() {
    this.pingCount = 0;
    try {
      //timer为发送心跳的计时器
      this.timer && clearInterval(this.timer);
      this.ws = new WebSocket(url);
      this.initWsEvent();
    } catch (e) {
      console.log('WebSocket err:', e);
      //重连
      this.reconnect();
    }
  }

  /**
   * 初始化WebSocket相关事件
   */
  initWsEvent() {

    if (!this.ws) {
      throw new Error('WebSocket: WebSocket对象为null');
    }

    let that = this;
    //建立WebSocket连接
    this.ws.onopen = function () {
      console.log('WebSocket:', '已连接到服务器');
    };

    //客户端接收服务端数据时触发
    this.ws.onmessage = function (evt) {

      if (evt.data === 'PONG') {
        console.log('WebSocket: 服务器消息: ', evt.data);
        that.pingCount = 0;
      }else {
        console.log('WebSocket: 服务器消息: ', evt.data);
        //接收到消息，处理逻辑...
      }

    };
    //连接错误
    this.ws.onerror = function (err) {
      console.log('WebSocket:', `连接服务器错误(${new Date()}).`);
      //重连
      that.reconnect();
    };

    //连接关闭
    this.ws.onclose = function () {
      console.log('WebSocket:', '连接关闭');
      that.timer && clearInterval(that.timer);
      //重连
      that.reconnect();
    };

    // 定时器，每秒操作
    this.timer = setInterval(() => {

      this.timerCount++;

      if (this.timerCount > this.pingInterval) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          console.log('WebSocket:', '发送心跳ping');
          this.sendMessage('PING');
          this.pingCount++;
        }
        this.timerCount = 0;
      }

      // 5次ping都没有回复，认为和服务器的连接已断开，重新连接
      if (this.pingCount >= this.maxPingCount) {
        this.timer && clearInterval(this.timer);
        // 重连
        this.reconnect(true);
      }

    }, 1000);
  }

  //发送消息
  sendMessage(msg) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(msg);
      } catch (err) {
        console.warn('ws 发送消息: ', err.message);
      }
    } else {
      console.log('WebSocket:', '尚未连接服务器，无法发送消息');
    }
  }

  //重连
  reconnect(now) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.initWebSocket();
    }, now ? 0 : 15000);
  }

  close() {
    this.ws?.close();
  }
}