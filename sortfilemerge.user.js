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
// ==UserScript==
// @name         sortfilemerge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.filesmerge.com/zh/merge-images
// @grant        none
// @require http://cdn.bootcss.com/jquery.min.js
// @require https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @match  *://www.filesmerge.com/*
// ==/UserScript==

(function() {
    'use strict';
    $('body').append($('<button id="sort" style="position: fixed;left: 40px;top: 200px;">排序</button>'))
    $('body').append($('<button id="sortAndPng" style="position: fixed;left: 84px;top: 200px;">一键合并</button>'))


    function sort(){
        const temp = $('#filelisttable > tbody > tr')


        function getNumber(str){
            var reg = /_([\d]+)\.png$/
            return parseInt(str.match(reg)[1])
        }



        for(let j=0;j<temp.length;j++){
            const arr = $('#filelisttable > tbody > tr')
            for(let i=0;i<arr.length-1;i++){
                const currentText = $($(arr[i]).children().get(1)).text()
                const nextText = $($(arr[i+1]).children().get(1)).text()
                if(getNumber(currentText)>getNumber(nextText)){
                    $($($(arr[i+1]).children().get(2)).children().get(0)).trigger('click')
                }
          }
        }
    }

    $('#sort').click(sort)
    $('#sortAndPng').click(function(){
        $('#output_fmt').val('PNG')
        sort()
        $.removeCookie('PHPSESSID',{ path: '/' })
        $('#mergebtn').trigger('click')
    })
    // Your code here...
})();
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
