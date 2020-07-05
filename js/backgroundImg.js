// JavaScript Document
/*jshint esversion:6*/
window.onload = () => {
			"use strict";
			var mainDiv = document.getElementById('main-div');
			// 实时监听当前页面离页面顶部的距离
			window.addEventListener("scroll", function() {
				// 当前页面离页面顶部的距离
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				// 判断切换背景图片
				if (scrollTop <1500) {
					mainDiv.style.backgroundImage = "url(images/img1.jpg)";} 
				else if (scrollTop >1500&&scrollTop<4500 ) {
					mainDiv.style.backgroundImage = "url(images/img2.jpg)";
				}
				else if (scrollTop >4500) {
					mainDiv.style.backgroundImage = "url(images/img3.jpg)";
				}
			});
		};
