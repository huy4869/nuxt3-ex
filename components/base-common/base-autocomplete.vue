<template>
  <div class="relative">
    <el-autocomplete
      v-model="name" class="autocomplete__container  " :class="{'autocomplete--icon': showIcon}"
      :placeholder="placeholder"
      :fetch-suggestions="handleAutocomplete"
      :debounce="200"
      clearable
      @select="handleSelected"
    >
      <template #default="{item}">
        <div class="flex items-center justify-start py-2 hover:bg-bg-01">
          <el-avatar class="border-none" :size="32" :src="item.avatar" alt="">
            <template #default>
              <img :src="imageDefault" alt="" />
            </template>
          </el-avatar>
          <p class="ml-2 text-body-01 text-color-dark truncate"> {{item.name}} </p>
        </div>
      </template>
    </el-autocomplete>
    <img v-if="showIcon" class="absolute top-2 left-3" :src="icon"  alt=""/>
  </div>
</template>

<script setup>
import imageDefault from '@/assets/images/icons/image_default.svg'
import iconSearch from '@/assets/images/icons/icon_search.svg'
import * as MasterService from '@/api/master-data'

const props = defineProps({
  icon:{
    type: String,
    default: iconSearch
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  paramsKey: {
    type: String,
    required:  true
  }
})

const emits = defineEmits(['selectItem'])
const name = ref('')

const handleSelected = (item) => {
  emits('selectItem', item)
}

const handleAutocomplete = async (query, callback) => {
  if(props.paramsKey) {
    try {
      const params = {}
      params[`resources[${props.paramsKey}]`] = JSON.stringify({ name: query })
      const response = await MasterService.fetchMasterData(params)
      if(response.status_code === 200) {
        callback(response.data[props.paramsKey])
      }
    }catch (e) {
      console.log(e)
    }
  }
}

</script>

