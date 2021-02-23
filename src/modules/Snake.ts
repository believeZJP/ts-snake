/*
 * @file: file
 * @author: zhaojianpeng
 */

class Snake {
    // 蛇的头部
    head: HTMLElement;
    // 蛇的身体
    bodies: HTMLCollection;

    // 蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.querySelector('.snake') as HTMLElement;
        this.head = document.querySelector('.snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div')
    }

    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    // 蛇头坐标
    set X(value: number) {
        // 如果新值和旧值相等，直接返回
        if (value === this.X) {
            return
        }
        // x合法范围0-290
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }

        // 修改x时，是修改水平坐标，蛇在左移动，不能又掉头，反之亦然
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            console.log('掉头')
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }

        // 头动了身体跟着移动
        this.moveBody()

        this.head.style.left = value + 'px';
        this.checkHeadBody()
    }
    set Y(value: number) {
        if (value === this.Y) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }

         // 修改x时，是修改水平坐标，蛇在左移动，不能又掉头，反之亦然
         if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            console.log('掉头')
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }

        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkHeadBody()
    }

    // 蛇的身体添加啊
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 蛇身体移动
    moveBody() {
        /**
         * 将后面的身体设置为前面身体的位置
         * 第4节 = 第3节的位置
         * 第3节 = 第2节的位置
         * 第2节 = 第1节的位置
         * 
         */
        for(let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let x = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 将值设置到当前位置
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }

    // 检查是否撞到自己
    checkHeadBody() {
        // 获取所有身体，检查是否和蛇头重叠
        for(let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己身体了')
            }
        }
    }


}

export default Snake;