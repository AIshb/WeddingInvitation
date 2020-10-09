// pages/navigate/navigate.js
import {CDN_PATH, KEY, REFERER} from '../../config/appConfig';
Page({
	data: {
		imgs: {
			rightArrow: `${CDN_PATH}/iconArrowRight@3x.png`
		},
		modes: [
			{text: '驾车', value: 'driving'},
			{text: '公交', value: 'transit'},
			{text: '步行', value: 'walking'}
		],
		modeIndex: 0,
		startPoint: null,
		isNavigate: true,
		showCustomActionsheet: false,
		customStyles: [
			{text: '墨渊', value: KEY, icon: `${CDN_PATH}/iconMapMoyuan@3x.png`},
			{text: '白浅', value: KEY, icon: `${CDN_PATH}/iconMapBaiqian@3x.png`},
			{text: '玉露', value: KEY, icon: `${CDN_PATH}/iconMapYulu@3x.png`},
			{text: '自定义', value: KEY}
		],
		keyIndex: 1
	},
	onChooseStartPoint () {
		wx.chooseLocation({
			success: (res) => {
				this.setData({
					startPoint: res
				});
			}
		});
	},
	onSelectMode (event) {
		const {index} = event.currentTarget.dataset;
		if (index === this.data.modeIndex) {
			return;
		}
		this.setData({
			modeIndex: index
		});
	},
	onTriggerActionsheet () {
		this.setData({
			showCustomActionsheet: true
		});
	},
	onSelectCustom (event) {
		const {index} = event.detail;
		this.setData({
			keyIndex: index,
			showCustomActionsheet: false
		});
	},
	onWatchRoute () {
		const key = KEY;
		const referer = REFERER;
		const endPoint = JSON.stringify({
      'name': '昆山皇冠国际会展酒店',
      'latitude': 31.379537,
      'longitude': 120.926080
    })
		const startPoint = this.data.startPoint ? JSON.stringify(this.data.startPoint) : '';
		const mode = this.data.modes[this.data.modeIndex].value;
		const navigation = this.data.isNavigate ? 1 : 0;
		let url = 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint +
		'&mode=' + mode + '&navigation=' + navigation;
		if (startPoint) {
			url += '&startPoint=' + startPoint;
		}
		wx.navigateTo({
			url
		});
	},
	onNavigateRoute () {
		wx.openLocation({
			latitude: 31.379537,
			longitude: 120.926080,
			name: '昆山皇冠国际会展酒店'
		})
	},
	onShareAppMessage: function () {

	}
});