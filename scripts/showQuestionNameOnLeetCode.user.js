// ==UserScript==
// @name        showQuestionNameOnLeetCode
// @namespace       https://ferrymanspace.github.io/
// @author      摆渡人
// @description     显示力扣题库页面题目名称
// @grant       none
// @downloadURL     https://ferrymanspace.github.io/scripts/showQuestionNameOnLeetCode.user.js
// @match       *://leetcode-cn.com/problemset/*
// ==/UserScript==
(function(){
    "use strict";
    function setAriaHidden(){
        let el=document.querySelectorAll('span');
        for(let i=0;i<el.length;i++){
            el[i].setAttribute('aria-hidden','false');
        }
    }
    if(document.readyState==='loading'){
        document.addEventListener('DOMContentLoaded',setAriaHidden);
    }else{
        setAriaHidden();
    }
})();