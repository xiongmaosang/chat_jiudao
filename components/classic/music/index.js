import {
  classicBeh
} from '../classicBehavior.js'

const mMgr = wx.getBackgroundAudioManager() //微信音乐内置方法

Component({
  behaviors: [classicBeh],

  properties: {
    src: String
  },

  data: {
    playing: false, //是否播放
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },

  attached() {
    this._recoverStatus()
    this._monitorSwitch()
  },

  // detached(e) {
  //   mMgr.stop() //关闭音频
  // },

  methods: {
    onPlay(e) {
      if (!this.data.playing) { //如果没有播放在播放
        this.setData({
          playing: true // 切换图片
        })
        mMgr.src = this.properties.src
      } else {
        this.setData({
          playing: false // 切换图片
        })
        mMgr.pause()
      }
    },
    _recoverStatus: function () {
      if (mMgr.paused) { //没有任何音乐播放
        this.setData({
          playing: false
        })
        return
      } else if (mMgr.src = this.properties.src) { //当前正在播放的音乐刚好是本组件
        this.setData({
          playing: true
        })
      }
    },

    _monitorSwitch() {
      mMgr.onPlay(() => { // 监听音乐总控开关的播放
        this._recoverStatus()
      })
      mMgr.onPause(() => {
        this._recoverStatus()
      })
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      mMgr.onEnded(() => {
        this._recoverStatus()
      })

    }
  }
})