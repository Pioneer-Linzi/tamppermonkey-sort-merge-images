// ==UserScript==
// @name         sortfilemerge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.filesmerge.com/zh/merge-images
// @grant        none
// @require http://cdn.bootcss.com/jquery.min.js
// @match  *://www.filesmerge.com/*
// ==/UserScript==

(function() {
    'use strict';
    $('body').append($('<button id="sort" style="position: fixed;left: 40px;top: 200px;">排序</button>'))

    $('#sort').click(function sort(){
        const temp = $('#filelisttable > tbody > tr')

        for(let j=0;j<temp.length;j++){
            const arr = $('#filelisttable > tbody > tr')
            for(let i=0;i<arr.length-1;i++){
                const currentText = $($(arr[i]).children().get(1)).text()
                const nextText = $($(arr[i+1]).children().get(1)).text()
                if(currentText>nextText){
                    $($($(arr[i+1]).children().get(2)).children().get(0)).trigger('click')
                }
          }
        }
    })
    // Your code here...
})();