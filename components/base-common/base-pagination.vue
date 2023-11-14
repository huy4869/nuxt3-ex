<template>
  <el-affix position="bottom" :offset="0" style="width: 100% !important;">
   <div class="bg-bg-04 pl-6 pr-4 py-2 flex justify-between items-center">
     <div>
       <div v-if="multipleSelection.length > 0" class="flex gap-x-2 items-center">
         <p><span class="text-brand-primary text-label"> {{ multipleSelection.length }}</span> <span class="text-body-01 text-color-dark"> đã chọn</span></p>
         <BaseButton size="small" class-custom="h-[32px]" class-extra="btn-danger" :text="`Xóa`" @submit="$emit('handleDelete', multipleSelection.map(item => item.id))" />
       </div>
     </div>
     <div :class="{ hidden: hidden }" class="pagination-container">
       <el-pagination
         v-model:currentPage="currentPage"
         v-model:page-size="pageSize"
         :background="background"
         :layout="layout"
         :page-sizes="pageSizes"
         :total="total"
         v-bind="$attrs"
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
       />
     </div>
   </div>
  </el-affix>
</template>

<script setup>
import { scrollTo } from '@/utils/scrollTo'
import { computed, ref } from 'vue'

const emit = defineEmits(['update:page', 'update:limit', 'pagination', 'handleDelete'])

const props = defineProps({
  multipleSelection: {
    type: Array,
    default() {
      return []
    }
  },
  total: {
    require: true,
    type: Number
  },
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 10
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 15, 20, 30, 50]
    }
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  background: {
    type: Boolean,
    default: true
  },
  autoScroll: {
    type: Boolean,
    default: true
  },
  hidden: {
    type: Boolean,
    default: false
  }
})
const currentPage = computed({
  get() {
    return props.page
  },
  set(val) {
    emit('update:page', val)
  }
})
const pageSize = computed({
  get() {
    return props.limit
  },
  set(val) {
    emit('update:limit', val)
  }
})

const handleSizeChange = (val) => {
  emit('pagination', { page: currentPage, limit: val })
  if (ref(props.autoScroll).value) {
    scrollTo(0, 800)
  }
}
const handleCurrentChange = (val) => {
  emit('pagination', { page: val, limit: pageSize })
  if (ref(props.autoScroll).value) {
    scrollTo(0, 800)
  }
}
</script>
