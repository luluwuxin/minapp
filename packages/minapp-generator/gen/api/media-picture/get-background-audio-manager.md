<!-- https://developers.weixin.qq.com/miniprogram/dev/api/getBackgroundAudioManager.html -->

### wx.getBackgroundAudioManager()

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)

获取**全局唯一**的背景音频管理器 `backgroundAudioManager`。

#### backgroundAudioManager

**backgroundAudioManager 对象的属性列表：**

  属性          |  类型      |  说明                                                                   |  只读 
----------------|------------|-------------------------------------------------------------------------|-------
  duration      |  Number    |  当前音频的长度（单位：s），只有在当前有合法的 src 时返回               |  是   
  currentTime   |  Number    |  当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回           |  是   
  paused        |  Boolean   |  当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放      |  是   
  src           |  String    |音频的数据源，默认为空字符串，**当设置了新的 src 时，会自动开始播放** ，目前支持的格式有 m4a, aac, mp3, wav|  否   
  startTime     |  Number    |  音频开始播放的位置（单位：s）                                          |  否   
  buffered      |  Number    |  音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。           |  是   
  title         |  String    |音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。|  否   
  epname        |  String    |  专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |  否   
  singer        |  String    |  歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |  否   
  coverImgUrl   |  String    |封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。|  否   
  webUrl        |  String    | 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。|  否   

**backgroundAudioManager 对象的方法列表：**

  方法           |  参数       |  说明                            
-----------------|-------------|----------------------------------
  play           |             |  播放                            
  pause          |             |  暂停                            
  stop           |             |  停止                            
  seek           |  position   |  跳转到指定位置，单位 s          
  onCanplay      |  callback   |背景音频进入可以播放状态，但不保证后面可以流畅播放
  onPlay         |  callback   |  背景音频播放事件                
  onPause        |  callback   |  背景音频暂停事件                
  onStop         |  callback   |  背景音频停止事件                
  onEnded        |  callback   |  背景音频自然播放结束事件        
  onTimeUpdate   |  callback   |  背景音频播放进度更新事件        
  onPrev         |  callback   |用户在系统音乐播放面板点击上一曲事件（iOS only）
  onNext         |  callback   |用户在系统音乐播放面板点击下一曲事件（iOS only）
  onError        |  callback   |  背景音频播放错误事件            
  onWaiting      |  callback   |音频加载中事件，当音频因为数据不足，需要停下来加载时会触发

#### errcode 说明

  errCode   |  说明   
------------|---------
  10001     | 系统错误
  10002     | 网络错误
  10003     | 文件错误
  10004     | 格式错误
  -1        | 未知错误

**示例代码：**

    const backgroundAudioManager = wx.getBackgroundAudioManager()
    
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放
