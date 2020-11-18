// ==UserScript==
// @name         豆瓣跳rarbg
// @namespace    http://tampermonkey.dcjanus.com/
// @version      0.1
// @description  豆瓣电影详情页新增链接跳转到rarbg搜索页面
// @author       DCjanus
// @match        https://movie.douban.com/subject/*
// @grant        none
// ==/UserScript==
"use strict";

function insertAfter(newNode, referenceNode) {
  return referenceNode.parentNode.insertBefore(
    newNode,
    referenceNode.nextSibling
  );
}

let imdb_ele_a = Array.from(document.querySelectorAll("#info a")).find((x) =>
  x.getAttribute("href").startsWith("https://www.imdb.com/title/")
);

let tt = imdb_ele_a.innerText;

let rarbg_span = document.createElement("span");
rarbg_span.className = "pl";
rarbg_span.innerText = "BT搜索: ";

let inserted_rarbg_span = insertAfter(rarbg_span, imdb_ele_a.nextSibling);

let rarbg_a = document.createElement("a");
rarbg_a.setAttribute("href", `https://rarbgprx.org/torrents.php?search=${tt}&order=size&by=DESC`);
rarbg_a.innerText = "RARBG";
rarbg_a.setAttribute("target", "_blank");
rarbg_a.setAttribute("rel","nofollow");

let inserted_rarbg_a = insertAfter( rarbg_a,inserted_rarbg_span);

let br = document.createElement("br");

insertAfter(br, inserted_rarbg_a);
