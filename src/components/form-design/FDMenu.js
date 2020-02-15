export const base = {
	title: '基础字段',
	child: [
		{
			title: '单行文本',
			type: 'input',
			icon: 'danhangwenben',
			value: '',
			options: {
				width: '100%',
				defaultValue: '',
				required: false,
				disabled: false,
				dataType: 'string',
				placeholder: '',
				regEx: '',
				option: [
					{
						value: 'string',
						label: '字符串'
					},
					{
						value: 'bool',
						label: '布尔值'
					},
					{
						value: 'int',
						label: '整数'
					},
					{
						value: 'float',
						label: '浮点数'
					},
					{
						value: 'url',
						label: 'URL地址'
					},
					{
						value: 'email',
						label: '邮箱地址'
					}
				]
			},
			key: ''
		},
		{
			title: '多行文本',
			type: 'textarea',
			code: '',
			icon: 'duohangwenben',
			value: '',
			options: {
				width: '100%',
				defaultValue: '',
				required: false,
				disabled: false,
				placeholder: '',
				regEx: ''
			},
			key: ''
		},
		{
			title: '数字文本框',
			type: 'number',
			code: '',
			icon: 'jishubiaoqian',
			value: '',
			options: {
				width: '120px',
				min: 0,
				max: 100,
				required: false,
				disabled: false
			},
			key: ''
		},
		{
			title: '单选框组',
			type: 'radio',
			code: '',
			icon: 'danxuankuang',
			value: '',
			options: {
				width: '100%',
				required: false,
				disabled: false,
				defaultValue: '',
				option: [
					{
						value: '值1',
						label: '选项1'
					},
					{
						value: '值2',
						label: '选项2'
					},
					{
						value: '值3',
						label: '选项3'
					}
				]
			},
			key: ''
		},
		{
			title: '多选框组',
			type: 'checkbox',
			code: '',
			icon: 'duoxuankuang1',
			value: '',
			options: {
				defaultValue: [],
				width: '100%',
				required: false,
				disabled: false,
				option: [
					{
						value: '值1',
						label: '选项1'
					},
					{
						value: '值2',
						label: '选项2'
					},
					{
						value: '值3',
						label: '选项3'
					}
				]
			},
			key: ''
		},
		{
			title: '时间选择器',
			type: 'datetime',
			code: '',
			icon: 'shijianxuanzeqi',
			value: '',
			options: {
				width: '100%',
				type: ['ymd', 'yyyy-MM-dd'],
				defaultValue: '',
				required: false,
				disabled: false,
				placeholder: ''
			},
			key: ''
		},
		{
			title: '下拉选择框',
			type: 'select',
			code: '',
			icon: 'xialaxuanze',
			value: '',
			options: {
				width: '100%',
				defaultValue: '',
				required: false,
				disabled: false,
				placeholder: '',
				option: [
					{
						value: '值1',
						label: '选项1'
					},
					{
						value: '值2',
						label: '选项2'
					},
					{
						value: '值3',
						label: '选项3'
					}
				]
			},
			key: ''
		},
		{
			title: '开关',
			type: 'switch',
			code: '',
			icon: 'kaiguan',
			value: false,
			options: {
				defaultValue: false,
				required: false,
				disabled: false
			},
			key: ''
		}
	]
}
export const senior = {
	title: '高级字段',
	child: [
		// {
		//   title: '图片上传',
		//   type: 'img',
		//   code: '',
		//   icon: 'tupianshangchuan',
		//   options: {
		//     defaultValue: '',
		//     required: false,
		//     disabled: false
		//   }
		// }
		{
			title: '意见框',
			type: 'idea',
			code: '',
			icon: 'duohangwenben',
			value: '',
			options: {
				width: '100%',
				defaultValue: '',
				required: false,
				disabled: false,
				placeholder: '',
				regEx: ''
			},
			key: ''
		}
	],
	key: ''
}
export const layout = {
	title: '布局字段',
	child: [
		{
			title: '栅格布局',
			type: 'grid',
			icon: 'ai211',
			cols: [
				{
					span: 12,
					list: []
				},
				{
					span: 12,
					list: []
				}
			],
			key: ''
		}
	],
	key: ''
}
export const elseItem = {
	title: '其它字段',
	child: [{
		title: '表单标题',
		type: 'title',
		icon: 'biaoti',
		value: '标题',
		options: {
			align: 'center',
			fontSize: '18px'
		},
		key: ''
	}],
	key: ''
}