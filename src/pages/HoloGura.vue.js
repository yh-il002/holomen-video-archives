/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed } from 'vue';
import jsonData from '../assets/json/hologura.json';
import MainTitle from '../components/MainTitle.vue';
const keyword = ref('');
const startDate = ref('');
const endDate = ref('');
const filteredData = computed(() => {
    return jsonData.filter(item => {
        const matchesKeyword = item.title.includes(keyword.value);
        const itemDate = new Date(item.release_date);
        const start = startDate.value ? new Date(startDate.value) : null;
        const end = endDate.value ? new Date(endDate.value) : null;
        const matchesDate = (!start || itemDate >= start) &&
            (!end || itemDate <= end);
        return matchesKeyword && matchesDate;
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "wapper" },
    id: "top",
});
/** @type {[typeof MainTitle, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(MainTitle, new MainTitle({
    title: "ホロぐら検索（〜2025/08/03）",
}));
const __VLS_1 = __VLS_0({
    title: "ホロぐら検索（〜2025/08/03）",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "serch-wrap" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    placeholder: "キーワードで検索",
    ...{ class: "input-keyword" },
});
(__VLS_ctx.keyword);
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "date",
    ...{ class: "input-startdate" },
});
(__VLS_ctx.startDate);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "date",
    ...{ class: "input-enddate" },
});
(__VLS_ctx.endDate);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "serch-num" },
});
(__VLS_ctx.filteredData.length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "item-list-wrap" },
});
const __VLS_3 = {}.TransitionGroup;
/** @type {[typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({
    name: "fade",
    tag: "div",
}));
const __VLS_5 = __VLS_4({
    name: "fade",
    tag: "div",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_6.slots.default;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filteredData))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (item.title),
        ...{ class: "item-list" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: (item.youtube_url),
        ...{ class: "item-list-link" },
        target: "_blank",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: (item.thumbnail_url),
        alt: "",
        ...{ class: "item-list-thumbnail" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: "item-list-title" },
    });
    (item.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "item-list-date" },
    });
    (item.release_date);
}
var __VLS_6;
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#top",
    ...{ class: "top-link" },
});
/** @type {__VLS_StyleScopedClasses['wapper']} */ ;
/** @type {__VLS_StyleScopedClasses['serch-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['input-keyword']} */ ;
/** @type {__VLS_StyleScopedClasses['input-startdate']} */ ;
/** @type {__VLS_StyleScopedClasses['input-enddate']} */ ;
/** @type {__VLS_StyleScopedClasses['serch-num']} */ ;
/** @type {__VLS_StyleScopedClasses['item-list-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['item-list']} */ ;
/** @type {__VLS_StyleScopedClasses['item-list-link']} */ ;
/** @type {__VLS_StyleScopedClasses['item-list-thumbnail']} */ ;
/** @type {__VLS_StyleScopedClasses['item-list-title']} */ ;
/** @type {__VLS_StyleScopedClasses['item-list-date']} */ ;
/** @type {__VLS_StyleScopedClasses['top-link']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MainTitle: MainTitle,
            keyword: keyword,
            startDate: startDate,
            endDate: endDate,
            filteredData: filteredData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
