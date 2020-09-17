var slider = document.getElementsByClassName('slider');
var sliderWraper = document.getElementsByClassName("slider__line")[0];
var pagination = document.getElementsByClassName("indicator");
var current = 1;


console.log(slider);
console.log(sliderWraper);
console.log(pagination);
console.log(current);


function active(){
	var indicator = document.getElementsByClassName('spanActive');
	console.log(indicator);
	indicator[0].classList.remove('spanActive');
	pagination[current-1].classList.add('spanActive'); 
	};






const sliderAction = (direction) => {
	active();
console.log(direction);
		if (direction === 'left') {
			switch (current) {
				case 1:
					current +=1
					sliderWraper.style.left = '-1920px';
					this.active();
				break;
				case 2:
					current +=1
					sliderWraper.style.left = '-3840px';
					this.active();
				break;
				case 3:
					current +=1
					sliderWraper.style.left = '-5760px';
					this.active();
				break;
				case 4:
					current +=1
					sliderWraper.style.left = '-7680px';
					this.active();
				break;
				case 5:
					current +=1
					sliderWraper.style.left = '-9600px';
					this.active();
				break;
				case 6:
					current +=1
					sliderWraper.style.left = '-11520px';
					this.active();
				break;
				case 7:
					current +=1
					sliderWraper.style.left = '-13440px';
					this.active();
				break;
				case 8:
					current +=1
					sliderWraper.style.left = '-15360px';
					this.active();
				break;
				case 9:
					current +=1
					sliderWraper.style.left = '-17280px';
					this.active();
				break;
				case 10:
					current = 1;
					console.log('slider end')
					sliderWraper.style.left = '0';
					this.active();
				break;
			};
		}else if(direction === 'right'){
			switch (current) {
				case 10:
					current = current-1
					sliderWraper.style.left = '-15360px';
					this.active();
				break;
				case 9:
					current = current-1
					sliderWraper.style.left = '-13440px';
					this.active();
				break;
				case 8:
					current = current-1
					sliderWraper.style.left = '-11520px';
					this.active();
				break;
				case 7:
					current = current-1
					sliderWraper.style.left = '-9600px';
					this.active();
				break;
				case 6:
					current = current-1
					sliderWraper.style.left = '-7680px';
					this.active();
				break;
				case 5:
					current = current-1;
					sliderWraper.style.left = '-5760px';
					this.active();
				break;
				case 4:
					current = current-1
					sliderWraper.style.left = '-3840px';
					this.active();
				break;
				case 3:
					current = current-1
					sliderWraper.style.left = '-1920px';
					this.active();
				break;
				case 2:
					current = current-1
					sliderWraper.style.left = '0px';
					this.active();
				break;
				case 1:
					current = 10;
					sliderWraper.style.left = '-17280px';
					this.active();
				break;
		};
	}
}
