<template>
  <div class="scroll-y">
    <el-table
      v-if="tableData.length > 0"
      ref="refTable"
      :data="tableData"
      bitem
      fit
      highlight-current-row
      :row-class-name="(row, rowIndex) => 'item-row-table'"
      @selection-change="handleSelectionChange"
    >
      <template v-for="(item, index) in tableColumns" :key="index">
        <el-table-column v-if="item.key === 'choice'" type="selection" :width="item.width" />
        <el-table-column
          v-if="item.key !== 'choice'"
         :prop="item.key"
         :label="item.label"
         :width="item.width"
         :align=" item.key === 'choice' || item.key === 'action' ? 'center' : 'left'">
          <template #default="scope">
            <slot v-if="item.key === 'action'" :name="item.key" :item="scope.row"/>
            <slot v-if="item.key !== 'action'" :name="item.key" :item="scope.row">
              <span> {{ scope.row[item.key] }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div v-if="tableData.length === 0 && !isLoadingNoData" class="w-full h-full flex">
     <BaseNoItem/>
    </div>
  </div>
</template>
<script setup>
import { COMMON_PROPS_TABLE } from "@/constants/table"
const emit = defineEmits(['selectionChange'])
const props = defineProps({
  ...COMMON_PROPS_TABLE,
  isLoadingNoData: {
    type: Boolean,
    default: true
  },
})
const refTable = ref(props.ref)
// list
const handleSelectionChange = (val) => {
  emit('selectionChange', val)
}
</script>
