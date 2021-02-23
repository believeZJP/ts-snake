/*
 * @file: file
 * @author: zhaojianpeng
 */

// 定义食物
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中食物元素，并赋值给element
        this.element =<HTMLElement>document.querySelectorAll('.food')[0]!;
        // this.element =document.querySelectorAll('.food')[0]!;
    }

    // 定义获取食物坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change() {
        // 生成一个随机的位置
        // 食物的位置最小0-290，移动一次10，食物坐标必须整10
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        const food = new Food();
        console.log(food.X, food.Y);
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';

        // food.change();
        console.log(left, top);
    }
    
}
export default Food;

// 测试代码
// const food = new Food();
// food.change();