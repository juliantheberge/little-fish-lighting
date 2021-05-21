//text reveal
$(".gridItem").click(function () {
	$(this).next().removeClass("none").slideDown(200);
	$(this).slideUp(200);
});

$(".textCover").click(function () {
	$(this).prev().slideDown(200);
	$(this).slideUp(200);
});


//burger menu toggle button
(function () {
	var burger = document.querySelector('.burger-container'),
		header = document.querySelector('.menuWrapper');

	burger.onclick = function () {
		header.classList.toggle('menu-opened');
	}
}());

/*     Waterfall Flow Code By: ONEO 2015.08.26
    NewWaterfall Flow Code By: ONEO 2016.10.25
------------------------------------------------------*/


(function () {
	$.fn.NewWaterfall = function (options) {
		// 参数

		var winWidth = $(window).width();
		var itemWidth


		if (winWidth < 600) {
			itemWidth = 599;
		} else {
			itemWidth = 300;
		}

		var defaults = {
			width: itemWidth,
			delay: 60,
			repeatShow: false
		};

		var config = $.extend({}, defaults, options);
		var ul = this;
		// 功能
		var show = function (li) {
			if ($(window).scrollTop() + $(window).height() > $(li).offset().top) {
				$(li).addClass('show');
			}
			else if ($(window).scrollTop() + $(window).height() < $(li).offset().top) {
				if (config.repeatShow) {
					$(li).removeClass('show');
				}
			}
		}

		var refresh = function () {
			if (ul.length <= 0) {
				return;
			}

			ul.css({
				"position": "relative"
			});

			// 参数
			var lis = $(ul).children("li");

			if (lis.length <= 0) {
				return;
			}

			var ul_width = $(ul).width();

			if (ul_width < 600) {
				config.width = 599;
			} else {
				config.width = 300;
			};

			var ul_column = parseInt(ul_width / config.width);

			if (lis.length < ul_column) {
				ul_column = lis.length;
			}

			var li_left = (ul_width - ul_column * config.width) / 2;

			if (ul_column > 0) {
				// 基础样式设置
				lis.css({
					"position": "absolute",
					"width": config.width
				});

				// 变量
				var maxHeight = 0;
				var list = []
				var nlist = []

				// 初始化列表
				for (var i = 0; i < lis.length; i++) {
					list.push({
						"index": i,
						"bottom": 0,
						"height": $(lis[i]).height(),
					});
				}

				// 初始化列
				for (var i = 0; i < ul_column; i++) {
					nlist.push([]);
				}

				// 智能排序
				for (var i = 0; i < lis.length; i++) {
					if (i < ul_column) {
						list[i]["bottom"] = list[i]["height"];
						nlist[i].push(list[i]);
					}
					else {
						var b = 0;
						var l = 0;
						for (var j = 0; j < ul_column; j++) {
							var jh = nlist[j][nlist[j].length - 1]["bottom"] + list[i]["height"];
							if (b == 0 || jh < b) {
								b = jh;
								l = j;
							}
						}
						list[i]["bottom"] = b;
						nlist[l].push(list[i]);
					}
				}

				// 开始布局
				for (var i = 0; i < nlist.length; i++) {
					for (var j = 0; j < nlist[i].length; j++) {
						$(lis[nlist[i][j]["index"]]).css({
							"left": i * config.width + li_left,
							"top": nlist[i][j]["bottom"] - nlist[i][j]["height"]
						});
					}
				}

				// 设置最大高度
				for (var i = 0; i < nlist.length; i++) {
					var h = nlist[i][nlist[i].length - 1]["bottom"];
					if (maxHeight < h) {
						maxHeight = h;

					}
				}
				$(ul).css("height", maxHeight);
			}
			else {
				lis.attr("style", "");
				ul.attr("style", "");
			}

			// 显示列表
			for (var i = 0; i < lis.length; i++) {
				show(lis[i]);
			}
		}

		// 刷新
		refresh();
		setInterval(refresh, config.delay);
	}
})();
/*     Waterfall Flow Code By: ONEO 2015.08.26
NewWaterfall Flow Code By: ONEO 2016.10.25
------------------------------------------------------*/


/*----------------------PHOTOSWIPE TEST------------------------*/

var openPhotoSwipe1 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/1111ThirdAve/101.jpg',
			w: 5576,
			h: 3720,
		},
		{
			src: 'LFL-images/1111ThirdAve/102.jpg',
			w: 5616,
			h: 3744,
		},
		{
			src: 'LFL-images/1111ThirdAve/103.jpg',
			w: 5560,
			h: 3744
		},
		{
			src: 'LFL-images/1111ThirdAve/104.jpg',
			w: 5611,
			h: 3744
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('1111').onclick = openPhotoSwipe1;

var openPhotoSwipe2 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/WaFed/001.jpg',
			w: 2100,
			h: 1400,
		},
		{
			src: 'LFL-images/WaFed/002.jpg',
			w: 2100,
			h: 1400,
		},
		{
			src: 'LFL-images/WaFed/003.jpg',
			w: 1400,
			h: 2100,
		},
		{
			src: 'LFL-images/WaFed/004.jpg',
			w: 2100,
			h: 1400,
		},
		{
			src: 'LFL-images/WaFed/005.jpg',
			w: 2100,
			h: 1400,
		},
		{
			src: 'LFL-images/WaFed/006.jpg',
			w: 2100,
			h: 1400,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('WaFed').onclick = openPhotoSwipe2;


var openPhotoSwipe3 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/OregonState/101.jpg',
			w: 1024,
			h: 1539,
		},
		{
			src: 'LFL-images/OregonState/102.jpg',
			w: 450,
			h: 600,
		},
		{
			src: 'LFL-images/OregonState/104.jpg',
			w: 1024,
			h: 1539,
		},
		{
			src: 'LFL-images/OregonState/105.jpg',
			w: 1154,
			h: 768,
		},
		{
			src: 'LFL-images/OregonState/106.jpg',
			w: 1200,
			h: 798,
		},
		{
			src: 'LFL-images/OregonState/107.jpg',
			w: 1200,
			h: 798,
		},
		{
			src: 'LFL-images/OregonState/108.jpg',
			w: 1200,
			h: 819,
		},
		{
			src: 'LFL-images/OregonState/109.jpg',
			w: 1200,
			h: 798,
		},
		{
			src: 'LFL-images/OregonState/110.jpg',
			w: 810,
			h: 1200,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('OSU').onclick = openPhotoSwipe3;

var openPhotoSwipe4 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/Anish/000.jpg',
			w: 4270,
			h: 1304,
		},
		{
			src: 'LFL-images/Anish/001.jpg',
			w: 4288,
			h: 2848,
		},
		{
			src: 'LFL-images/Anish/002.jpg',
			w: 2848,
			h: 4288,
		},
		{
			src: 'LFL-images/Anish/003.jpg',
			w: 2830,
			h: 2706,
		},
		{
			src: 'LFL-images/Anish/004.jpg',
			w: 2806,
			h: 4189,
		},
		{
			src: 'LFL-images/Anish/005.jpg',
			w: 2848,
			h: 4288,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Anish').onclick = openPhotoSwipe4;

var openPhotoSwipe5 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/ElectricWarfBridge/101.jpg',
			w: 4372,
			h: 2906,
		},
		{
			src: 'LFL-images/ElectricWarfBridge/102.jpg',
			w: 2906,
			h: 4372,
		},
		{
			src: 'LFL-images/ElectricWarfBridge/103.jpg',
			w: 4322,
			h: 2872,
		},
		{
			src: 'LFL-images/ElectricWarfBridge/104.jpg',
			w: 2906,
			h: 4372,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Electric').onclick = openPhotoSwipe5;

var openPhotoSwipe6 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/929BellevueOffice/101.jpg',
			w: 3600,
			h: 2354,
		},
		{
			src: 'LFL-images/929BellevueOffice/102.jpg',
			w: 2354,
			h: 3600,
		},
		{
			src: 'LFL-images/929BellevueOffice/103.jpg',
			w: 3600,
			h: 2246,
		},
		{
			src: 'LFL-images/929BellevueOffice/104.jpg',
			w: 3600,
			h: 2174,
		},
		{
			src: 'LFL-images/929BellevueOffice/105.jpg',
			w: 5616,
			h: 3744,
		},
		{
			src: 'LFL-images/929BellevueOffice/106.jpg',
			w: 3600,
			h: 2354,
		},
		{
			src: 'LFL-images/929BellevueOffice/107.jpg',
			w: 5616,
			h: 3744,
		},
		{
			src: 'LFL-images/929BellevueOffice/108.jpg',
			w: 5554,
			h: 3744,
		},
		{
			src: 'LFL-images/929BellevueOffice/109.jpg',
			w: 5573,
			h: 3675,
		},
		{
			src: 'LFL-images/929BellevueOffice/110.jpg',
			w: 5570,
			h: 3714,
		},
		{
			src: 'LFL-images/929BellevueOffice/111.jpg',
			w: 5609,
			h: 3744,
		},
		{
			src: 'LFL-images/929BellevueOffice/112.jpg',
			w: 5616,
			h: 3744,
		},
		{
			src: 'LFL-images/929BellevueOffice/113.jpg',
			w: 5616,
			h: 3744,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('929').onclick = openPhotoSwipe6;

var openPhotoSwipe7 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/FiftyThree/001.jpg',
			w: 6289,
			h: 4712,
		},
		{
			src: 'LFL-images/FiftyThree/002.jpg',
			w: 6047,
			h: 4712,
		},
		{
			src: 'LFL-images/FiftyThree/003.jpg',
			w: 6278,
			h: 4712,
		},
		{
			src: 'LFL-images/FiftyThree/004.jpg',
			w: 6108,
			h: 4712,
		},
		{
			src: 'LFL-images/FiftyThree/005.jpg',
			w: 6255,
			h: 4712,
		},
		{
			src: 'LFL-images/FiftyThree/006.jpg',
			w: 6289,
			h: 4712,
		},
		{
			src: 'LFL-images/FiftyThree/007.jpg',
			w: 5572,
			h: 4712,
		},
		{
			src: 'LFL-images/FiftyThree/008.jpg',
			w: 4712,
			h: 6289,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Fifty').onclick = openPhotoSwipe7;

var openPhotoSwipe8 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/CambiaGrove/001.jpg',
			w: 5561,
			h: 3744,
		},
		{
			src: 'LFL-images/CambiaGrove/002.jpg',
			w: 5616,
			h: 3744,
		},
		{
			src: 'LFL-images/CambiaGrove/003.jpg',
			w: 5584,
			h: 3744,
		},
		{
			src: 'LFL-images/CambiaGrove/004.jpg',
			w: 5606,
			h: 3744,
		},

	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Cambia').onclick = openPhotoSwipe8;

var openPhotoSwipe9 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/CLINKProShop/001.jpg',
			w: 1400,
			h: 991,
		},
		{
			src: 'LFL-images/CLINKProShop/002.jpg',
			w: 1400,
			h: 935,
		},
		{
			src: 'LFL-images/CLINKProShop/003.jpg',
			w: 1400,
			h: 938,
		},
		{
			src: 'LFL-images/CLINKProShop/004.jpg',
			w: 1400,
			h: 935,
		},
		{
			src: 'LFL-images/CLINKProShop/005.jpg',
			w: 1400,
			h: 935,
		},
		{
			src: 'LFL-images/CLINKProShop/006.jpg',
			w: 1400,
			h: 935,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('CLINK').onclick = openPhotoSwipe9;

var openPhotoSwipe9 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/AvedaNottingHill/101.jpg',
			w: 929,
			h: 936,
		},
		{
			src: 'LFL-images/AvedaNottingHill/102.jpg',
			w: 400,
			h: 408,
		},
		{
			src: 'LFL-images/AvedaNottingHill/103.jpg',
			w: 400,
			h: 409,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Aveda').onclick = openPhotoSwipe9;

var openPhotoSwipe10 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/ClarinsSelfridges/001.jpg',
			w: 1071,
			h: 785,
		},
		{
			src: 'LFL-images/ClarinsSelfridges/002.jpg',
			w: 775,
			h: 900,
		},
		{
			src: 'LFL-images/ClarinsSelfridges/003.jpg',
			w: 994,
			h: 772,
		},
		{
			src: 'LFL-images/ClarinsSelfridges/004.jpg',
			w: 779,
			h: 974,
		},

	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Clarins').onclick = openPhotoSwipe10;

var openPhotoSwipe11 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/LevisEurope/000.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/001.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/002.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/003.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/004.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/005.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/006.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/007.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/008.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/009.jpg',
			w: 752,
			h: 490,
		},
		{
			src: 'LFL-images/LevisEurope/010.jpg',
			w: 752,
			h: 490,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Levis').onclick = openPhotoSwipe11;

var openPhotoSwipe12 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/UNHPaulGeorge/101.jpg',
			w: 1080,
			h: 628,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/102.jpg',
			w: 900,
			h: 600,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/103.jpg',
			w: 2592,
			h: 2569,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/104.jpg',
			w: 3862,
			h: 2576,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/105.jpg',
			w: 2592,
			h: 3076,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/106.jpg',
			w: 3243,
			h: 2560,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/107.jpg',
			w: 2540,
			h: 2995,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/108.jpg',
			w: 2661,
			h: 2264,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/109.jpg',
			w: 980,
			h: 550,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/110.jpg',
			w: 980,
			h: 550,
		},
		{
			src: 'LFL-images/UNHPaulGeorge/111.jpg',
			w: 980,
			h: 550,
		},

	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('UNH').onclick = openPhotoSwipe12;

var openPhotoSwipe13 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/UTNeylundStadium/001.jpg',
			w: 5184,
			h: 3456,
		},
		{
			src: 'LFL-images/UTNeylundStadium/002.jpg',
			w: 5184,
			h: 3456,
		},
		{
			src: 'LFL-images/UTNeylundStadium/003.jpg',
			w: 4961,
			h: 2575,
		},
		{
			src: 'LFL-images/UTNeylundStadium/004.jpg',
			w: 3456,
			h: 3432,
		},
		{
			src: 'LFL-images/UTNeylundStadium/005.jpg',
			w: 5127,
			h: 3118,
		},
		{
			src: 'LFL-images/UTNeylundStadium/006.jpg',
			w: 3456,
			h: 4600,
		},
		{
			src: 'LFL-images/UTNeylundStadium/007.jpg',
			w: 5184,
			h: 2224,
		},
		{
			src: 'LFL-images/UTNeylundStadium/008.jpg',
			w: 540,
			h: 720,
		},
		{
			src: 'LFL-images/UTNeylundStadium/009.jpg',
			w: 1576,
			h: 1050,
		},
		{
			src: 'LFL-images/UTNeylundStadium/010.jpg',
			w: 5184,
			h: 3150,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('UT').onclick = openPhotoSwipe13;

var openPhotoSwipe14 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/AlaskaCrimeLab/101.jpg',
			w: 1024,
			h: 818,
		},
		{
			src: 'LFL-images/AlaskaCrimeLab/103.jpg',
			w: 1024,
			h: 818,
		},
		{
			src: 'LFL-images/AlaskaCrimeLab/105.jpg',
			w: 1024,
			h: 818,
		},
		{
			src: 'LFL-images/AlaskaCrimeLab/106.jpg',
			w: 1024,
			h: 694,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Alaska').onclick = openPhotoSwipe14;

var openPhotoSwipe15 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/LetTheDanceBegin/001.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/LetTheDanceBegin/002.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/LetTheDanceBegin/003.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/LetTheDanceBegin/004.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/LetTheDanceBegin/005.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/LetTheDanceBegin/006.jpg',
			w: 1024,
			h: 675,
		},


	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('LetDance').onclick = openPhotoSwipe15;

var openPhotoSwipe16 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/RUCGeorgeCross/101.jpg',
			w: 768,
			h: 1024,
		},
		{
			src: 'LFL-images/RUCGeorgeCross/102.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/RUCGeorgeCross/103.jpg',
			w: 2048,
			h: 1536,
		},
		{
			src: 'LFL-images/RUCGeorgeCross/104.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/RUCGeorgeCross/105.jpg',
			w: 1024,
			h: 1553,
		},
		{
			src: 'LFL-images/RUCGeorgeCross/106.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/RUCGeorgeCross/107.jpg',
			w: 1024,
			h: 675,
		},
		{
			src: 'LFL-images/RUCGeorgeCross/108.jpg',
			w: 2048,
			h: 1536,
		},
		{
			src: 'LFL-images/RUCGeorgeCross/109.jpg',
			w: 2048,
			h: 1536,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('RUC').onclick = openPhotoSwipe16;

var openPhotoSwipe17 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/UWTacoma/101.jpg',
			w: 4900,
			h: 2667,
		},
		{
			src: 'LFL-images/UWTacoma/102.jpg',
			w: 4000,
			h: 2667,
		},
		{
			src: 'LFL-images/UWTacoma/103.jpg',
			w: 4000,
			h: 2667,
		},
		{
			src: 'LFL-images/UWTacoma/104.jpg',
			w: 4000,
			h: 2667,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('UW').onclick = openPhotoSwipe17;


// NEW STUFF

// Gateway Discovery Park
var openPhotoSwipe18 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/GatewayDiscoveryPark/01.jpg',
			w: 2191,
			h: 3300,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/02.jpg',
			w: 3300,
			h: 2153,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/03.jpg',
			w: 6480,
			h: 4320,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/04.jpg',
			w: 2028,
			h: 3300,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/05.jpg',
			w: 3300,
			h: 2797,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/06.jpg',
			h: 2931,
			w: 3300,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/07.jpg',
			w: 5984,
			h: 3366,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/08.jpg',
			w: 5984,
			h: 3366,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/09.jpg',
			w: 3366,
			h: 5984,
		},
		{
			src: 'LFL-images/GatewayDiscoveryPark/10.jpg',
			w: 3366,
			h: 5984,
		}
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('Gateway').onclick = openPhotoSwipe18;

// PSU Karl Miller Center
var openPhotoSwipe19 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/PSUKarlMillerCenter/01.jpg',
			h: 4464,
			w: 6696,
		},
		{
			src: 'LFL-images/PSUKarlMillerCenter/02.jpg',
			w: 4469,
			h: 6703,
		},
		{
			src: 'LFL-images/PSUKarlMillerCenter/03.jpg',
			w: 4447,
			h: 6701,
		},
		{
			src: 'LFL-images/PSUKarlMillerCenter/04.jpg',
			w: 4467,
			h: 6700,
		},
		{
			src: 'LFL-images/PSUKarlMillerCenter/05.jpg',
			w: 4469,
			h: 6703,
		},
		{
			src: 'LFL-images/PSUKarlMillerCenter/06.jpg',
			h: 4468,
			w: 6702,
		},
		{
			src: 'LFL-images/PSUKarlMillerCenter/07.jpg',
			h: 4465,
			w: 6698,
		},
		{
			src: 'LFL-images/PSUKarlMillerCenter/08.jpg',
			h: 4469,
			w: 6703,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('PSUKarlMiller').onclick = openPhotoSwipe19;

// Wa Fed PDX

var openPhotoSwipe20 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/WaFedPDX/01.jpg',
			w: 5120,
			h: 3418,
		},
		{
			src: 'LFL-images/WaFedPDX/02.jpg',
			w: 5120,
			h: 3418,
		},
		{
			src: 'LFL-images/WaFedPDX/03.jpg',
			w: 5120,
			h: 3418,
		},
		{
			src: 'LFL-images/WaFedPDX/04.jpg',
			w: 5120,
			h: 3418,
		},
		{
			src: 'LFL-images/WaFedPDX/05.jpg',
			w: 5120,
			h: 3418,
		},
		{
			src: 'LFL-images/WaFedPDX/06.jpg',
			w: 5120,
			h: 3418,
		},
		{
			src: 'LFL-images/WaFedPDX/07.jpg',
			w: 5120,
			h: 3418,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('WaFedPDX').onclick = openPhotoSwipe20;

// WaFedSLC


var openPhotoSwipe21 = function () {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'LFL-images/WaFedSLC/01.jpg',
			h: 1400,
			w: 2100,
		},
		{
			src: 'LFL-images/WaFedSLC/02.jpg',
			w: 1400,
			h: 2100,
		},
		{
			src: 'LFL-images/WaFedSLC/03.jpg',
			h: 1400,
			w: 2100,
		},
		{
			src: 'LFL-images/WaFedSLC/04.jpg',
			h: 1400,
			w: 2100,
		},
		{
			src: 'LFL-images/WaFedSLC/05.jpg',
			w: 1400,
			h: 2100,
		},
		{
			src: 'LFL-images/WaFedSLC/06.jpg',
			h: 1400,
			w: 2100,
		},
	];

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,

		showHideOpacity: true,

		// must also change in CSS file
		showAnimationDuration: 333,
		hideAnimationDuration: 333

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('WaFedSLC').onclick = openPhotoSwipe21;