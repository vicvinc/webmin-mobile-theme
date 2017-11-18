'use strict';

(function (service) {

	// コンストラクタ  =================================================================
	service.init = function () {
		canvasEvent();
		var _titleEvent = new ride.common.titleEvent();
	};

	// functions  ====================================================================

	function canvasEvent() {
		/*-------------------------------------------------------------------------
  AGENT
  */

		var _device = "PC";

		(function () {
			var ua = navigator.userAgent;

			if (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1 || ua.indexOf('iPad') > 0) {
				_device = "TB";
			} else if (ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') == -1 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
				_device = "SP";
			}
		})();

		/*------------------------------------------------------------------------
  RESIZE
  */
		var _resizeList = [];

		function xAddResize(_trg) {
			_resizeList.push(_trg);
		}

		function xRemoveResize(_trg) {
			var i;
			var _new = [];

			for (i = 0; i < _resizeList.length; i++) {
				if (_resizeList[i] != _trg) {
					_new.push(_resizeList[i]);
				}
			}

			_resizeList = [];

			for (i = 0; i < _new.length; i++) {
				_resizeList.push(_new[i]);
			}
		}

		function onResize() {
			for (var i = 0; i < _resizeList.length; i++) {
				_resizeList[i].onResize();
			}
		}
		//----------------------------------------------------------


		var _main;

		var Main = function () {
			function Main() {
				this._canvasBg;

				window.onload = function () {
					_main.onLoad();
				};
			}

			Main.prototype.onLoad = function () {

				//bg
				this._canvasBg = new CanvasBg("bg", false);
				this._canvasBg.start();
			};

			return Main;
		}();

		_main = new Main();

		function CanvasBg(_id, isAuto) {
			//IE?
			this.isIE = false;
			var _ua = window.navigator.userAgent;
			if (_ua.match(/MSIE/) || _ua.match(/Trident/)) {
				this.isIE = true;
			}

			this._id = _id;
			this.isAuto = isAuto;

			this._canvas;
			this._stage;
			this._width;
			this._height;

			this._scaleX;
			this._scaleY;

			//ABOUT
			this._about;

			this._count = 0;

			this._lineNum = 2;
			this._lineList = [];

			this.init();
		}

		/*
  INIT
  */
		CanvasBg.prototype.init = function () {
			this._canvas = document.getElementById(this._id);
			this._stage = new createjs.Stage(this._canvas);

			this._width = window.innerWidth;
			this._height = window.innerHeight;

			this.loadImg();
		};

		/*
  LOAD IMG
  */
		CanvasBg.prototype.loadImg = function () {
			var _this = this;
			var _img = new Image();
			_img.src = "/wp/wp-content/themes/assets/img/service/bg-canvas1.png";
			//_img.onload = loadImgComplete;
			_img.onload = function (e) {
				_this.createImg(e);
			};
		};

		CanvasBg.prototype.createImg = function (e) {
			var _img = e.target;

			//line
			for (var i = 0; i < 3; i++) {
				var _line = new CanvasLine(this, _img);
				this._lineList.push(_line);
			}

			//自動再生するか？
			if (this.isAuto) {
				this.start();
			}
		};

		CanvasBg.prototype.pageEnd = function () {
			if (this._about != undefined) {
				this._about.pageEnd();
			}
		};

		CanvasBg.prototype.start = function () {
			//RESIZE
			xAddResize(this);
			this.onResize();

			//enterframe
			var _this = this;
			createjs.Ticker.setFPS(30);
			createjs.Ticker.addEventListener("tick", function () {
				_this.tick.apply(_this);
			});
		};

		/*
  ENTER FRAME
  */
		CanvasBg.prototype.tick = function () {
			var i;

			this._count++;

			if (this._count >= 40) {
				this._count = 0;

				for (i = 0; i < this._lineList.length; i++) {
					this._lineList[i].pointChange();
				}
			}

			for (i = 0; i < this._lineList.length; i++) {
				this._lineList[i].update();
			}

			if (this._about != null) {
				this._about.update();
			}

			this._stage.update();
		};

		/*
  RESIZE
  */
		CanvasBg.prototype.onResize = function () {
			this._scaleX = window.innerWidth / this._width;
			this._scaleY = window.innerHeight / this._height;

			this._stage.canvas.width = window.innerWidth;
			this._stage.canvas.height = window.innerHeight;

			this._width = window.innerWidth;
			this._height = window.innerHeight;

			//line
			for (var i = 0; i < this._lineList.length; i++) {
				this._lineList[i].resize();
			}

			//about
			//console.log(this._about);


			if (this._about != undefined) {
				this._about.resize();
			}

			this._stage.update();
		};

		function CanvasLine(_parent, _img) {
			this._parent = _parent;
			this._stage = this._parent._stage;
			this._img = _img;
			this._imgScale = 1;

			this._segment = _device == 'SP' ? 3 : 8;
			this._line;
			this._rangeAdjustment = _device == 'SP' ? 100 : 200;
			this._rangeAdjustment_pull = _device == 'SP' ? 50 : 100;
			this._bmdList = [];
			this._posList = [];
			this._newPosList = [];

			this._shiftX;
			this._shiftY;

			this.init();
		}

		CanvasLine.prototype.init = function () {
			this._container = new createjs.Container();
			this._container.x = this._parent._width / 2;
			this._container.y = this._parent._height / 2;
			this._stage.addChild(this._container);

			var i;

			//line
			//for( i = 0; i < 1; i++ )
			//{	
			//line
			this._line = new createjs.Shape();
			this._container.addChild(this._line);
			//}


			//cross
			var _range = this._parent._width - this._rangeAdjustment;
			var _haba = Math.ceil(_range / (this._segment - 1));

			for (i = 0; i < this._segment; i++) {
				var _bmd = new createjs.Bitmap(this._img);
				_bmd.scaleX = _bmd.scaleY = this._imgScale;
				_bmd.x = _haba * i - _range * 0.5;
				_bmd.y = Math.ceil(Math.random() * this._rangeAdjustment - this._rangeAdjustment_pull);
				_bmd.alpha = 0.5;
				this._container.addChild(_bmd);

				this._posList.push([_bmd.x, _bmd.y]);
				this._newPosList.push([_bmd.x, _bmd.y]);
				this._bmdList.push(_bmd);
			}

			this._shiftX = this._img.width * this._imgScale * 0.5;
			this._shiftY = this._img.height * this._imgScale * 0.5;
		};

		/*
  DRAW
  */
		CanvasLine.prototype.draw = function () {
			var _g = this._line.graphics;
			_g.clear();
			_g.beginStroke("rgba( 233, 233, 233, 1 )");

			_g.moveTo(-this._parent._width * 0.5, 0);

			for (var i = 0; i < this._segment; i++) {
				this._posList[i][0] = this._posList[i][0] * 0.8 + this._newPosList[i][0] * 0.2;
				this._posList[i][1] = this._posList[i][1] * 0.8 + this._newPosList[i][1] * 0.2;

				_g.lineTo(this._posList[i][0] + this._shiftX, this._posList[i][1] + this._shiftY);
				this._bmdList[i].x = this._posList[i][0];
				this._bmdList[i].y = this._posList[i][1];
			}

			_g.lineTo(this._parent._width * 0.5, 0);
			_g.endStroke();
		};

		/*
  ENTER FRAME
  */
		CanvasLine.prototype.update = function () {
			this.draw();
		};

		/*
  POONT UPDATE
  */
		CanvasLine.prototype.pointUpdate = function () {
			var _range = this._parent._width - this._rangeAdjustment;
			var _haba = Math.ceil(_range / (this._segment - 1));
			this._posList = [];

			for (var i = 0; i < this._segment; i++) {
				var _xx = _haba * i - _range * 0.5;
				var _yy = Math.ceil(Math.random() * this._rangeAdjustment - this._rangeAdjustment_pull);
				this._posList.push([_xx, _yy]);
			}
		};

		/*
  POINT CHANGE
  */
		CanvasLine.prototype.pointChange = function () {
			var _range = this._parent._width - this._rangeAdjustment;
			var _haba = Math.ceil(_range / (this._segment - 1));

			for (var i = 0; i < this._segment; i++) {
				var _xx = _haba * i - _range * 0.5;
				var _yy = Math.ceil(Math.random() * this._rangeAdjustment - this._rangeAdjustment_pull);
				this._newPosList[i][0] = _xx;
				this._newPosList[i][1] = _yy;
			}
		};

		/*
  RESIZE
  */
		CanvasLine.prototype.resize = function () {
			this._container.x = this._parent._width / 2;
			this._container.y = this._parent._height / 2;

			for (var i = 0; i < this._bmdList.length; i++) {
				this._bmdList[i].scaleX = this._bmdList[i].scaleY = this._imgScale;
			}

			this.pointUpdate();
		};
	}
})(ride.service = ride.service || {});

ride.service.init();
