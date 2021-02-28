// ==UserScript==
// @name        showQuestionNameOnLeetCode.com
// @version     0.0
// @description     显示力扣题库页面的题目名称
// @namespace        https://ferrymanspace.github.io/
// @grant       none
// @match       *://leetcode-cn.com/problemset/*
// @downloadURL      https://ferrymanspace.github.io/scripts/showQuestionNameOnLeetCode.user.js
// ==UserScript==
(function(){
    "use strict";
    function setAriaHidden(){
        let el=document.querySelectorAll('span');
        for(let i=0;i<el.length;i++){
            el[i].setAttribute('aria-hidden','false');
        }
    }
    function trySet(){
        if(document.readyState==='loading'){
            document.addEventListener('DOMContentLoaded',setAriaHidden);
        }else{
            setAriaHidden();
        }
    }
})();