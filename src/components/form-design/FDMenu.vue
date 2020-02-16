<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-03 08:37:07
 * @LastEditTime: 2019-12-10 11:29:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <el-collapse :value="['1','2','3','4']" style="width: 100%;">
    <el-collapse-item title="基础字段" name="1">
      <draggable
        :list="base.child"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
      >
        <div class="cell" v-for="(item, i) in base.child" :key="i">
          <p class="left">
            <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{item.title}}</p>
        </div>
      </draggable>
    </el-collapse-item>
    <el-collapse-item title="高级字段" name="2">
      <draggable
        :list="senior.child"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
      >
        <div class="cell" v-for="(item, i) in senior.child" :key="i">
          <p class="left">
           <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{item.title}}</p>
        </div>
      </draggable>
    </el-collapse-item>
    <el-collapse-item title="布局字段" name="3">
      <draggable
        :list="layout.child"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
      >
        <div class="cell" v-for="(item, i) in layout.child" :key="i">
          <p class="left">
           <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{item.title}}</p>
        </div>
      </draggable>
    </el-collapse-item>
    <el-collapse-item title="其它字段" name="3">
      <draggable
        :list="elseItem.child"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
      >
        <div class="cell" v-for="(item, i) in elseItem.child" :key="i">
          <p class="left">
           <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{item.title}}</p>
        </div>
      </draggable>
    </el-collapse-item>
    <el-collapse-item title="图表" name="4">
      <draggable
        :list="charts.child"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
      >
        <div class="cell" v-for="(item, i) in charts.child" :key="i">
          <p class="left">
           <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{item.title}}</p>
        </div>
      </draggable>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import draggable from 'vuedraggable'
import common from '@/utils/common'
import bus from '@/utils/bus'
import { base, senior, layout, elseItem, charts } from './FDMenu.js'

export default {
  components: {
    draggable
  },
  name: 'FDMenu',
  data () {
    return {
      base,
      senior,
      layout,
      elseItem,
      charts
    }
  },
  mounted () {
    bus.$on('formMenu.init', () => {
      this.initMenu()
    })
  },
  methods: {
    log: function (evt) {
      console.log('menu')
      window.console.log(evt)
    },
    initMenu () {
      this.base = common.deepClone(base)
      this.senior = common.deepClone(senior)
      this.layout = common.deepClone(layout)
      this.elseItem = common.deepClone(elseItem)
      this.charts = common.deepClone(charts)
    }
  }
}
</script>

<style scoped>
.cell {
  cursor: move;
  float: left;
  height: 30px;
  line-height: 30px;
  width: 100px;
  background-color: #ecf5ff;
  margin: 0 10px 10px 0;
}
.cell .left {
  float: left;
  width: 27px;
  height: 100%;
  margin: 0;
}
.cell .left img {
  position: relative;
  top: -1px;
  left: 5px;
}
.cell .right {
  float: left;
  width: 73px;
  height: 100%;
  margin: 0;
}
.iconfont  {
  margin-left: 5px;
}
</style>

