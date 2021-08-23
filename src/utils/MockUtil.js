import MockAdapter from 'axios-mock-adapter';

/**
 * Mock工具类
 * 接口数据Mock
 * 使用方式：
 * // const mock = new Mock(axios);
 * // mock.mockFunction();
 */
class Mock {

  setup(axios) {
    this.mock = new MockAdapter(axios, { onNoMatch: "passthrough" });
  }
  
  mockTest() {
    let api = '/mock';
    this.mock.onGet(new RegExp(`.*${api}.*`)).reply((config)=>{
      return [
        200,
        require('../mock/mockTestRespone.json')
      ];
    });
  }
}

export default Mock;
