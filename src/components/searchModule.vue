<template>
  <section>
    <el-form :inline="true" :model="formSearch" class="form_inline" :label-width="formItems.labelWidth" ref="searchTable">

      <el-form-item :label="item.name" size="small" v-for="item in formItems.formItemsArr" :key="item.name">

        <el-input v-model="formSearch[item.filed]" :placeholder="'请输入'+item.name" v-if="item.type == 'text'"></el-input>

        <el-radio-group v-model="formSearch[item.filed]" v-if="item.type == 'radio'">
          <el-radio :label="iitem.label" v-for="iitem in item.options" :key="iitem.label">{{iitem.name}}</el-radio>
        </el-radio-group>
        
        <el-select v-model="formSearch[item.filed]" :placeholder="'请选择'+item.name" v-if="item.type == 'select'">
          <el-option
            v-for="iitem in item.options"
            :key="iitem.value"
            :label="iitem.label"
            :value="iitem.value">
          </el-option>
        </el-select>
        <el-date-picker
          v-if="item.type == 'datePicker'"
          v-model="formSearch[item.filed]"
          type="datetime"
          value-format="timestamp"
          :placeholder="item.name">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="getList">查 询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="showAdd" v-if="showAddBtn">添 加</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="danger" @click="deleInfor" v-if="showDelBtn">批量删除</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  props:["formItems","showAddBtn","showDelBtn"],
  data(){
    return{
      formSearch:{
        size:10,
        current:1
      },
    }
  },
  methods:{
    getList(){
      this.$emit('searchInfor',this.formSearch)
    },
    deleInfor(){
      this.$emit('muchDeleteType',false)
    },
    showAdd(){
      this.$emit('addTotrue',true)
    }
  },
  mounted(){
    // console.log(this.formItems)
  }
}
</script>

<style>

</style>