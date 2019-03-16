function $http(params) {
	$.ajax({
    url: 'http://game.jktwo.com' + params.url,
    data: JSON.stringify(params.data || {}),
		dataType: 'JSON',
		method: params.type || 'post',
		timeout: 10000,
		contentType: "application/json;charset=utf-8",
		success: function(resStr) {
      console.log(resStr)
			try {
        params.success(resStr)
			}
			catch(err) {
				throw new Error(err);
			  mui.toast('500 error 数据返回异常');
			}
		},
		error: params.error || function(error) {
			mui.toast('http请求异常');
		}
	})
}

function cardConfig(name) {
	var cardObj = {
		"工商银行": 'icbc',
		"中国农业银行": 'abc',
		"中国银行": 'boc',
		"中国建设银行": 'ccb',
		"中国邮政储蓄银行": 'psbc',
		"招商银行": 'cmb',
		"交通银行": 'bocom',
		"成都银行": 'bocd',
		"兴业银行": 'cib',
		"浦发银行": 'spdb',
		"中信银行": 'citic'
	};
	if(!cardObj[name]) return 'unionpay';
	return cardObj[name];
}
