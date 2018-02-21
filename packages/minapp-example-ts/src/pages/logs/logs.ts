import * as formatDate from 'mora-scripts/libs/lang/formatDate'
import {m, BasePage} from '../../bootstrap'

@m.pagify()
export default class extends BasePage<{logs: string[]}> {
  data = {
    logs: ['test']
  }
  onLoad() {
    console.log('onLoad running', this.app)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return formatDate(new Date(log), 'yyyy-mm-dd HH:ii:ss')
      })
    })
  }
}