//web app应用 配置信息。appId必须要和变量名相同！appTitle为滑屏内显示的文字。
var nullApp = {
	appId: "",
	appTitle: "",
	appUrl: "",
	appIcon: "",
	unable: true,
}

var ballMaze = {
	appId: "ballMaze",
	appTitle: "3D迷宫球",
	appUrl: "app/ballmaze/index.html",
	appIcon: "BallMaze.png",
}
var pdfReader = {
	appId: "pdfReader",
	appTitle: "PDF阅读器",
	appUrl: "app/PDF/web/viewer.html",
	appIcon: "PDFReader.png",
}
var map3D = {
	appId: "map3D",
	appTitle: "3D地图",
	appUrl: "http://hypnosnova.github.io/tangram",
	appIcon: "map3D.png",
}

var spiderCard = {
	appId: "spiderCard",
	appTitle: "蜘蛛纸牌",
	appUrl: "http://hypnosnova.github.io/fSpider",
	appIcon: "spider.png",
}

var tunnelGame = {
	appId: "tunnelGame",
	appTitle: "隧道穿越",
	appUrl: "http://hypnosnova.github.io/Tunnel",
	appIcon: "tunnel.png",
}

var piano = {
	appId: "piano",
	appTitle: "3D钢琴",
	appUrl: "http://hypnosnova.github.io/WebGL_Piano",
	appIcon: "piano.png",
}

var summary = {
	appId: "summary",
	appTitle: "HTML5介绍",
	appUrl: "app/summary/index.html",
	appIcon: "summary.png",
}

var editor = {
	appId: "editor",
	appTitle: "Zero",
	appUrl: "app/editor/editor.html",
	appIcon: "editor.png",
}

var angular = {
	appId: "angular",
	appTitle: "AngularJS",
	appUrl: "app/angular/angular.html",
	appIcon: "angular.png",
}

var javascript = {
	appId: "javascript",
	appTitle: "JavaScript",
	appUrl: "app/javascript/javascript.html",
	appIcon: "javascript.png",
}

var css = {
	appId: "css",
	appTitle: "CSS",
	appUrl: "app/css/css.html",
	appIcon: "css.png",
}

var sl = {
	appId: "sl",
	appTitle: "扫雷",
	appUrl: "app/minesweeper/index.html",
	appIcon: "minesweeper.png",
}

var puzzle = {
	appId: "puzzle",
	appTitle: "拼图",
	appUrl: "app/puzzle/index.html",
	appIcon: "puzzle.png",
}

var responsive = {
	appId: "responsive",
	appTitle: "响应式布局",
	appUrl: "app/responsive/responsive.html",
	appIcon: "responsive.png",
}

var mysigma = {
	appId: "mysigma",
	appTitle: "My∑",
	appUrl: "app/MySigma/index.html",
	appIcon: "mysigma.png",
}

var appSet = [
	[summary,css,javascript,responsive,angular, pdfReader,editor],
	[ballMaze, spiderCard, tunnelGame, map3D, piano, sl, puzzle, mysigma]
]

function setAppArray(arr) {
	var tmp=[];
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < 15; j++) {
			if(j>=arr[i].length){
				tmp.push(nullApp);
			}else{
				tmp.push(arr[i][j]);
			}
		}
	}
	return tmp;
}
var appArray = setAppArray(appSet);