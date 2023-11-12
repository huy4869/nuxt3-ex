<template>
    <div>
        <form>
            <label for="locale-select">{{ $t('language') }}: </label>
            <select id="locale-select" v-model="$i18n.locale">
                <option value="en">en</option>
                <option value="vi">vi</option>
            </select>
        </form>
    </div>
</template>