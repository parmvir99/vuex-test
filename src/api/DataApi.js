import BaseApi from './BaseApi'

class DataApi extends BaseApi {
  getRecords () {
    return super.execGET('/products')
  }
}
export default new DataApi()
