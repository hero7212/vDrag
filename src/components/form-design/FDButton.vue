<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-03 08:37:07
 * @LastEditTime: 2019-10-14 10:36:17
 * @LastEditors: Please set LastEditors
 -->
<template>
  <el-form label-position="top" label-width="80px" size="mini">
    <el-form-item label="按钮内文字">
      <el-input v-model="data.text" size="small"></el-input>
    </el-form-item>
    <el-form-item label="宽度">
      <el-input v-model="data.options.width" size="small"></el-input>
    </el-form-item>
    <el-form-item label="最大长度">
      <el-input-number
        v-model="data.options.maxlength"
        :min="1"
        :max="50"
        label="最大长度"
        size="small"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="占位内容">
      <el-input v-model="data.options.placeholder" size="small"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-popover placement="bottom" title="系统默认值" width="200" trigger="click">
        <el-table :data="defaultValueList">
          <el-table-column width="50" label="序号" header-align="center" type="index"></el-table-column>
          <el-table-column header-align="center" prop="label" label="值类型">
            <template slot-scope="scope">
              <a
                href="javascript:void(0);"
                @click="data.options.defaultValue = scope.row.val"
              >{{scope.row.label}}</a>
            </template>
          </el-table-column>
        </el-table>
        <el-input v-model="data.options.defaultValue" size="small" slot="reference"></el-input>
      </el-popover>
    </el-form-item>
    <el-form-item label="数据绑定key">
      <el-input v-model="data.key" size="small" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="数据类型">
      <el-select v-model="data.options.dataType" placeholder="请选择">
        <el-option
          v-for="item in data.options.option"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否必填">
      <el-switch v-model="data.options.required" active-color="#13ce66" inactive-color="#EEEEEE"></el-switch>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="data.options.disabled" active-color="#13ce66" inactive-color="#EEEEEE"></el-switch>
    </el-form-item>
    <el-form-item label="正则表达式">
      <el-input v-model="data.options.regEx" size="small"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import common from '@/utils/common'
import bus from '@/utils/bus'

export default {
  props: {
    propData: {
      type: Object,
      default: function () {
        return {
          title: '单行文本',
          type: 'input',
          code: '',
          icon: '/static/img/form-design/input.png',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            dataType: 'string',
            placeholder: '',
            maxlength: 30,
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
          key: common.getGuid()
        }
      }
    },
    defaultValueList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      data: {
        title: '单行文本',
        type: 'input',
        code: '',
        icon: '/static/img/form-design/input.png',
        options: {
          width: '100%',
          defaultValue: '',
          required: false,
          disabled: false,
          dataType: 'string',
          placeholder: '',
          regEx: '',
          maxlength: 30,
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
        key: common.getGuid()
      }
    }
  },
  methods: {},
  mounted () {},
  watch: {
    data: {
      handler: function (value, oldValue) {
        let newFormList = common.deepClone(
          this.$store.state.formDesign.formList
        )
        // eslint-disable-next-line no-unused-vars
        let activeIndex
        for (let i = 0; i < this.$store.state.formDesign.formList.length; i++) {
          const element = newFormList[i]
          if (element.type !== 'grid') {
            if (element.key === this.$store.state.formDesign.activeKey) {
              activeIndex = i

              newFormList[i] = value
              this.$store.commit('formDesign/updateActiveKey', element.key)
              this.$store.dispatch(
                'formDesign/setFormList',
                common.deepClone(newFormList)
              )
              bus.$emit('formDesign.syncList', common.deepClone(newFormList))
              break
            }
          } else {
            for (let j = 0; j < element.cols.length; j++) {
              const element2 = element.cols[j]
              for (let k = 0; k < element2.list.length; k++) {
                const element3 = element2.list[k]
                if (element3.key === this.$store.state.formDesign.activeKey) {
                  activeIndex = i

                  newFormList[i].cols[j].list[k] = value
                  this.$store.commit(
                    'formDesign/updateActiveKey',
                    element3.key
                  )
                  this.$store.dispatch(
                    'formDesign/setFormList',
                    common.deepClone(newFormList)
                  )
                  bus.$emit(
                    'formDesign.syncList',
                    common.deepClone(newFormList)
                  )
                  break
                }
              }
            }
          }
        }
      },
      deep: true
    },
    propData: {
      handler: function (value) {
        this.data = common.deepClone(value)
      },
      deep: true
      // immediate: true
    }
  }
}
</script>

<style>
</style>
